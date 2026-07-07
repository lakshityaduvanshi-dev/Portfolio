import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-main py-8 mt-24 text-center">
      <p className="font-mono text-xs text-text-muted">
        &copy; {new Date().getFullYear()} — Built with Passion by <span className="text-accent">Lakshit Yaduvanshi</span>
      </p>
    </footer>
  );
}