import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchRecord } from '../types';
import { getCountryByName } from '../constants/countries';
import { formatSalary } from '../utils/currency';
import { useAppStore } from '../store/appStore';
import { LightColors, DarkColors, Spacing, Radius } from '../constants/theme';

type Props = {
  record: SearchRecord;
  onView: (record: SearchRecord) => void;
  onDelete: (id: string) => void;
};

// Cover images from Stitch Completed list
const COVER_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAEZtcYXkow2SckzEiP3izbX0bGUvMAbYFARKgTCuC4R3JCSsQujwFKV2ZB4gWLNFbpNAux1rU7S_Lbdc8Ym6ob0tWbL-m-49xUl12bpHRV8fHuU2EDlvGX1elkXZ_rWBb1qNvy7-0nIZrhNWX36fYDzMy8_-pUZc3iGkFmkSMBFUGGt5TRs_ZcwXImCdwiT1frst9SNQ4KmKL2svOerwqZ2YMBWDEGkj85HKsc5vngK4daE-0WlKo2QOFGJFxksG6g6qrb6Of5Mvc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB6hKtEw1YXwlhP15r3eD3dxs3wy4Qra9fdWW2d359sChVUv_ecBm9cF2gvSrMakiIZ6pNICaBFL9ivXwChMhIdNFjm13SobhHJzDBiBSXPg3HwCZRtPXT4LZNFca3jh24UvGnJbD5bgRI1IdLc6RUTwnByoS7gfw_cE0zNSOEvIjlXJ_l0bv-f3gqHi_U5lBbcEno07XPuSv1K-1130G94D9greiX_a3V14tKDh8pE4xhD9KUgP51JQYOeIaP_MNG7uGzzD4qcCIY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBySmtTeijIuenzVd-FlfLzvRwPnRar9_v6U9ya0yy0RQSK3v1Sv-MUa4nQ23o2msJMdtwId9Yza2T2MZrx-zlao6IWTj7yIqx6_NLI1D_fjc-m0PCVU4EyZZlTIJBFsJhBvm2fvdkvV4NHRi8vGsOQleWslwdpcVmUETtyJXieTjX1APSWb4pyS6n9_9bvlGl98zilujVCZZSdzwdW9sMcgujeu2EyTIQLeFK1N-ID2drto7KlIR1Vu13GJhxy4eHVPJwXaMlC_pI',
];

export function HistoryCard({ record, onView, onDelete }: Props) {
  const { filters, results, timestamp } = record;
  const { theme } = useAppStore();
  const systemColorScheme = useColorScheme();
  const isDark = theme === 'dark' || (theme === 'system' && systemColorScheme === 'dark');
  const c = isDark ? DarkColors : LightColors;

  const country = getCountryByName(filters.country) || {
    name: filters.country, code: 'IN', currency: 'INR', currencyCode: filters.currencyCode || 'INR',
    currencySymbol: filters.currency || '₹', salaryFormat: filters.salaryFormat || 'LPA', placeholder: '',
  };

  const displayMin = results.salaryMin !== null ? results.salaryMin : 0;
  const displayMax = results.salaryMax !== null ? results.salaryMax : 0;
  const formattedMin = displayMin > 0 ? formatSalary(displayMin, country as any) : 'N/A';
  const formattedMax = displayMax > 0 ? formatSalary(displayMax, country as any) : 'N/A';

  const avgSalary = (displayMin > 0 && displayMax > 0) ? (displayMin + displayMax) / 2 : null;
  const avgHike = (avgSalary !== null && filters.currentSalary)
    ? Math.max(0, Math.round(((avgSalary - filters.currentSalary) / filters.currentSalary) * 100))
    : null;

  const formatDate = (isoStr: string) => {
    const d = new Date(isoStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays}d ago`;
  };

  // Determine cover image based on ID hash
  const imageIndex = Math.abs(record.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % COVER_IMAGES.length;
  const coverImage = COVER_IMAGES[imageIndex];

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: isDark ? 'rgba(30, 29, 52, 0.4)' : c.card, borderColor: c.border }]}
      onPress={() => onView(record)}
      activeOpacity={0.85}
    >
      <View style={styles.contentWrap}>
        <View style={styles.textWrap}>
          <View style={styles.titleRow}>
            <Text style={[styles.roleTitle, { color: c.text }]} numberOfLines={1}>
              {filters.role}
            </Text>
          </View>
          
          <Text style={[styles.metaSub, { color: c.textSecondary }]}>
            {filters.company} · {formatDate(timestamp)}
          </Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Ionicons name="location-outline" size={13} color={c.textSecondary} />
              <Text style={[styles.infoVal, { color: c.textSecondary }]} numberOfLines={1}>
                {filters.country}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="cash-outline" size={13} color={c.textSecondary} />
              <Text style={[styles.infoVal, { color: c.textSecondary }]} numberOfLines={1}>
                {formattedMax.split('/')[0]}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="people-outline" size={13} color={c.textSecondary} />
              <Text style={[styles.infoVal, { color: c.textSecondary }]}>
                {results.sourcesCount || 0} Sources
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionArea}>
        <TouchableOpacity onPress={() => onDelete(record.id)} style={styles.deleteBtn}>
          <Ionicons name="trash-outline" size={16} color={c.danger} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.detailsBtn, { backgroundColor: c.primaryLight, borderColor: c.primary + '30' }]} onPress={() => onView(record)}>
          <Text style={[styles.detailsBtnText, { color: c.primary }]}>Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  contentWrap: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  textWrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  roleTitle: {
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  metaSub: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 1,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  infoVal: {
    fontSize: 9,
    fontWeight: '600',
  },
  actionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.xs,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.05)',
    paddingTop: Spacing.xs,
  },
  deleteBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
    borderWidth: 1,
  },
  detailsBtnText: {
    fontSize: 10,
    fontWeight: '700',
  },
});
