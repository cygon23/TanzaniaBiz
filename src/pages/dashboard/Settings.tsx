import React from 'react';
import { useParams } from 'react-router-dom';

// Import role-specific settings components
import EntrepreneurSettings from './entrepreneur/Settings';

// You can create similar settings components for other roles
const AdminSettings = () => <div>Admin Settings Component</div>;
const MentorSettings = () => <div>Mentor Settings Component</div>; 
const CompanySettings = () => <div>Company Settings Component</div>;

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