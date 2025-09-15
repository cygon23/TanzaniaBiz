import React from 'react';
import { useParams } from 'react-router-dom';

// Import role-specific settings components
import EntrepreneurSettings from './entrepreneur/Settings';

// Import role-specific settings components
import AdminSettings from './admin/AdminSettings';
import MentorSettings from './mentor/MentorSettings';
import CompanySettings from './company/CompanySettings';

export default function Settings() {
  const { role } = useParams();

  const renderSettingsComponent = () => {
    switch (role) {
      case 'entrepreneur':
        return <EntrepreneurSettings />;
      case 'admin':
        return <AdminSettings />;
      case 'mentor':
        return <MentorSettings />;
      case 'company':
        return <CompanySettings />;
      default:
        return <EntrepreneurSettings />;
    }
  };

  return renderSettingsComponent();
}