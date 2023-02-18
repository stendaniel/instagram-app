
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authPath } from '../services/path';

export default function useLocations() {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => navigate(authPath.login), [navigate]);

  return {
    goToLogin
  }
};
