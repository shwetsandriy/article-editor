import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ tree, onSelect, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        {renderTree(tree, onSelect)}
      </div>
      {/* <button
        className="sidebar-toggle-inline"
        onClick={() => setSidebarOpen(prev => !prev)}
      >
        {sidebarOpen ? '⟨' : '⟩'}
      </button> */}
    </div>
  );
}

const FolderGroup = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-group">
      <button
        className="sidebar-group-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▾' : '▸'} {label}
      </button>
      {isOpen && <div className="sidebar-subgroup">{children}</div>}
    </div>
  );
};

function renderTree(node, onSelect) {
  return Object.entries(node).map(([key, value]) => {
    if (key === 'files') {
      return value.map((file) => (
        <button
          key={file.path}
          className="sidebar-item"
          onClick={() => onSelect(file.path)}
        >
          {file.name}
        </button>
      ));
    }

    return (
      <FolderGroup key={key} label={key}>
        {renderTree(value, onSelect)}
      </FolderGroup>
    );
  });
}
