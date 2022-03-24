import React from "react";
export default function Status({
  bodyStatus,
  footerStatus,
  headerStatus,
  sidebarStatus,
}) {
  return (
    <div>
      <h1>Status</h1>
      {bodyStatus}
      {footerStatus}
      {headerStatus}
      {sidebarStatus}
    </div>
  );
}
