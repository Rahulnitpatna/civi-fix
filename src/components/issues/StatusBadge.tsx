
import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Reported':
        return 'issue-status-badge-reported';
      case 'Confirmed':
        return 'issue-status-badge-confirmed';
      case 'In Progress':
        return 'issue-status-badge-in-progress';
      case 'Resolved':
        return 'issue-status-badge-resolved';
      default:
        return 'issue-status-badge-reported';
    }
  };

  return (
    <span className={`issue-status-badge ${getStatusBadgeClass(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
