import type { FilterType } from '../types/todo';

interface Props {
  filter: FilterType;
  activeCount: number;
  completedCount: number;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행 중' },
  { value: 'completed', label: '완료' },
];

export function TodoFilter({
  filter,
  activeCount,
  completedCount,
  onFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 text-xs text-gray-400">
      <span>{activeCount}개 남음</span>

      <div className="flex gap-1">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-2 py-1 rounded transition-colors ${
              filter === value
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'hover:text-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="hover:text-red-500 transition-colors"
        >
          완료 삭제
        </button>
      )}
    </div>
  );
}
