import React from 'react';
import { thirdPartyCodes, getActiveCodes } from '../lib/config';

// Componente para códigos no head (usado no index.html)
export function HeadCodes() {
  const headerCodes = getActiveCodes('header');
  
  if (!headerCodes) return null;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: headerCodes }} />
  );
}

// Componente para códigos no início do body
export function BodyStartCodes() {
  const bodyStartCodes = getActiveCodes('bodyStart');
  
  if (!bodyStartCodes) return null;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: bodyStartCodes }} />
  );
}

// Componente para códigos no final do body
export function BodyEndCodes() {
  const bodyEndCodes = getActiveCodes('bodyEnd');
  
  if (!bodyEndCodes) return null;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: bodyEndCodes }} />
  );
}
