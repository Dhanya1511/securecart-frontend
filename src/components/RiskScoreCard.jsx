import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const RiskScoreCard = ({ score, status, title, showDetails = false, details = [] }) => {
  const getColor = () => {
    if (score < 40) return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-600' };
    if (score < 70) return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'text-yellow-600' };
    return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'text-red-600' };
  };

  const colors = getColor();

  const getStatusIcon = () => {
    if (status === 'genuine') return <CheckCircle size={20} className={colors.icon} />;
    if (status === 'suspicious' || (score >= 40 && score < 70)) return <AlertTriangle size={20} className={colors.icon} />;
    return <AlertCircle size={20} className={colors.icon} />;
  };

  const getStatusLabel = () => {
    if (score < 40) return 'LOW RISK';
    if (score < 70) return 'MEDIUM RISK';
    return 'HIGH RISK';
  };

  return (
    <div className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
          <p className={`text-sm ${colors.text}`}>{getStatusLabel()}</p>
        </div>
        {getStatusIcon()}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-600">Risk Score</span>
          <span className={`text-lg font-bold ${colors.text}`}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              score < 40 ? 'bg-green-600' : score < 70 ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Details */}
      {showDetails && details.length > 0 && (
        <div className="space-y-2 text-sm">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-gray-600">•</span>
              <span className="text-gray-700">{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RiskScoreCard;
