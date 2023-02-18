
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authPath, Layout } from '../services/path';

export default function useLocations() {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => navigate(authPath.login), [navigate]);

  const goToHome = React.useCallback(() => navigate(Layout.home), [navigate]);

  return {
    goToLogin,
    goToHome
  }
};
