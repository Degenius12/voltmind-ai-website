/**
 * VoltMind AI - Animated N8N-Style Flowcharts
 * Scroll-triggered animations, interactive nodes, animated data particles
 */

document.addEventListener('DOMContentLoaded', function () {

  // =========================================================================
  // WORKFLOW DEFINITIONS
  // =========================================================================
  const workflows = {
    lead: {
      label: 'Lead Management',
      nodes: [
        { id: 'trigger', type: 'trigger', x: 30,  y: 60,  label: 'Web Form', sub: 'New submission', icon: 'form', delay: 1 },
        { id: 'enrich',  type: 'ai',      x: 200, y: 60,  label: 'AI Enrich', sub: 'Company data lookup', icon: 'ai', delay: 2 },
        { id: 'score',   type: 'decision', x: 370, y: 60,  label: 'Lead Score', sub: 'Qualify & rank', icon: 'score', delay: 3 },
        { id: 'hot',     type: 'action',   x: 540, y: 0,   label: 'Notify Sales', sub: 'Slack + assign rep', icon: 'notify', delay: 4 },
        { id: 'warm',    type: 'output',   x: 540, y: 130, label: 'Nurture Seq', sub: 'Email drip campaign', icon: 'email', delay: 4 },
        { id: 'crm',     type: 'action',   x: 710, y: 60,  label: 'Update CRM', sub: 'Salesforce / HubSpot', icon: 'crm', delay: 5 },
        { id: 'report',  type: 'output',   x: 710, y: 180, label: 'Dashboard', sub: 'Real-time analytics', icon: 'chart', delay: 6 },
      ],
      connections: [
        { from: 'trigger', to: 'enrich',  delay: 1 },
        { from: 'enrich',  to: 'score',   delay: 2 },
        { from: 'score',   to: 'hot',     delay: 3, label: 'Hot' },
        { from: 'score',   to: 'warm',    delay: 3, label: 'Warm' },
        { from: 'hot',     to: 'crm',     delay: 4 },
        { from: 'warm',    to: 'report',  delay: 5 },
      ]
    },
    support: {
      label: 'Customer Support',
      nodes: [
        { id: 'ticket',   type: 'trigger', x: 30,  y: 80,  label: 'New Ticket', sub: 'Email / chat / form', icon: 'ticket', delay: 1 },
        { id: 'classify', type: 'ai',      x: 200, y: 80,  label: 'AI Classify', sub: 'Intent & sentiment', icon: 'ai', delay: 2 },
        { id: 'route',    type: 'decision', x: 370, y: 80,  label: 'Priority', sub: 'Urgent vs. standard', icon: 'score', delay: 3 },
        { id: 'auto',     type: 'action',   x: 540, y: 150, label: 'Auto Reply', sub: 'KB article match', icon: 'email', delay: 4 },
        { id: 'escalate', type: 'data',     x: 540, y: 10,  label: 'Escalate', sub: 'Assign to agent', icon: 'notify', delay: 4 },
        { id: 'resolve',  type: 'action',   x: 710, y: 80,  label: 'Resolve', sub: 'Close & tag', icon: 'check', delay: 5 },
        { id: 'csat',     type: 'output',   x: 710, y: 200, label: 'CSAT Survey', sub: 'Feedback collection', icon: 'chart', delay: 6 },
      ],
      connections: [
        { from: 'ticket',   to: 'classify', delay: 1 },
        { from: 'classify', to: 'route',    delay: 2 },
        { from: 'route',    to: 'escalate', delay: 3, label: 'Urgent' },
        { from: 'route',    to: 'auto',     delay: 3, label: 'Standard' },
        { from: 'escalate', to: 'resolve',  delay: 4 },
        { from: 'auto',     to: 'resolve',  delay: 4 },
        { from: 'resolve',  to: 'csat',     delay: 5 },
      ]
    },
    invoice: {
      label: 'Invoice Processing',
      nodes: [
        { id: 'receive', type: 'trigger', x: 30,  y: 80,  label: 'Receive', sub: 'Email / upload', icon: 'form', delay: 1 },
        { id: 'extract', type: 'ai',      x: 200, y: 80,  label: 'AI Extract', sub: 'OCR + data parse', icon: 'ai', delay: 2 },
        { id: 'match',   type: 'decision', x: 370, y: 80,  label: 'PO Match', sub: 'Validate against POs', icon: 'score', delay: 3 },
        { id: 'approve', type: 'action',   x: 540, y: 20,  label: 'Auto Approve', sub: 'Under threshold', icon: 'check', delay: 4 },
        { id: 'review',  type: 'data',     x: 540, y: 150, label: 'Manager Review', sub: 'Manual approval', icon: 'notify', delay: 4 },
        { id: 'pay',     type: 'action',   x: 710, y: 80,  label: 'Schedule Pay', sub: 'AP system update', icon: 'crm', delay: 5 },
        { id: 'ledger',  type: 'output',   x: 710, y: 200, label: 'GL Entry', sub: 'Accounting sync', icon: 'chart', delay: 6 },
      ],
      connections: [
        { from: 'receive', to: 'extract', delay: 1 },
        { from: 'extract', to: 'match',   delay: 2 },
        { from: 'match',   to: 'approve', delay: 3, label: 'Match' },
        { from: 'match',   to: 'review',  delay: 3, label: 'Mismatch' },
        { from: 'approve', to: 'pay',     delay: 4 },
        { from: 'review',  to: 'pay',     delay: 4 },
        { from: 'pay',     to: 'ledger',  delay: 5 },
      ]
    },
    onboarding: {
      label: 'Employee Onboarding',
      nodes: [
        { id: 'hire',    type: 'trigger',  x: 30,  y: 80,  label: 'New Hire', sub: 'Offer accepted', icon: 'form', delay: 1 },
        { id: 'docs',    type: 'ai',       x: 200, y: 80,  label: 'AI Docs', sub: 'Generate contracts & forms', icon: 'ai', delay: 2 },
        { id: 'verify',  type: 'decision', x: 370, y: 80,  label: 'Verify', sub: 'Background & ID check', icon: 'score', delay: 3 },
        { id: 'it',      type: 'action',   x: 540, y: 20,  label: 'IT Setup', sub: 'Accounts, laptop, access', icon: 'crm', delay: 4 },
        { id: 'hr',      type: 'action',   x: 540, y: 150, label: 'HR Enroll', sub: 'Benefits & payroll', icon: 'check', delay: 4 },
        { id: 'welcome', type: 'output',   x: 710, y: 80,  label: 'Welcome', sub: 'Onboarding email & calendar', icon: 'email', delay: 5 },
        { id: 'track',   type: 'output',   x: 710, y: 200, label: 'Dashboard', sub: 'Onboarding progress', icon: 'chart', delay: 6 },
      ],
      connections: [
        { from: 'hire',   to: 'docs',    delay: 1 },
        { from: 'docs',   to: 'verify',  delay: 2 },
        { from: 'verify', to: 'it',      delay: 3, label: 'Approved' },
        { from: 'verify', to: 'hr',      delay: 3, label: 'Parallel' },
        { from: 'it',     to: 'welcome', delay: 4 },
        { from: 'hr',     to: 'track',   delay: 5 },
      ]
    },
    reporting: {
      label: 'Report Generation',
      nodes: [
        { id: 'schedule', type: 'trigger',  x: 30,  y: 80,  label: 'Schedule', sub: 'Daily / weekly / monthly', icon: 'form', delay: 1 },
        { id: 'collect',  type: 'ai',       x: 200, y: 80,  label: 'AI Collect', sub: 'Pull from 5+ sources', icon: 'ai', delay: 2 },
        { id: 'analyze',  type: 'decision', x: 370, y: 80,  label: 'Analyze', sub: 'Trends & anomalies', icon: 'score', delay: 3 },
        { id: 'report',   type: 'action',   x: 540, y: 20,  label: 'Build Report', sub: 'Charts, tables, summary', icon: 'chart', delay: 4 },
        { id: 'alert',    type: 'data',     x: 540, y: 150, label: 'Alert', sub: 'Anomaly detected', icon: 'notify', delay: 4 },
        { id: 'deliver',  type: 'output',   x: 710, y: 20,  label: 'Distribute', sub: 'Email to stakeholders', icon: 'email', delay: 5 },
        { id: 'archive',  type: 'output',   x: 710, y: 150, label: 'Archive', sub: 'Cloud storage + audit', icon: 'crm', delay: 6 },
      ],
      connections: [
        { from: 'schedule', to: 'collect',  delay: 1 },
        { from: 'collect',  to: 'analyze',  delay: 2 },
        { from: 'analyze',  to: 'report',   delay: 3, label: 'Normal' },
        { from: 'analyze',  to: 'alert',    delay: 3, label: 'Anomaly' },
        { from: 'report',   to: 'deliver',  delay: 4 },
        { from: 'alert',    to: 'deliver',  delay: 4 },
        { from: 'deliver',  to: 'archive',  delay: 5 },
      ]
    },
    social: {
      label: 'Social Media',
      nodes: [
        { id: 'calendar', type: 'trigger',  x: 30,  y: 80,  label: 'Calendar', sub: 'Content schedule trigger', icon: 'form', delay: 1 },
        { id: 'generate', type: 'ai',       x: 200, y: 80,  label: 'AI Create', sub: 'Copy + image generation', icon: 'ai', delay: 2 },
        { id: 'review',   type: 'decision', x: 370, y: 80,  label: 'Review', sub: 'Brand & compliance check', icon: 'score', delay: 3 },
        { id: 'publish',  type: 'action',   x: 540, y: 20,  label: 'Publish', sub: 'Multi-platform posting', icon: 'check', delay: 4 },
        { id: 'revise',   type: 'data',     x: 540, y: 150, label: 'Revise', sub: 'Send back for edits', icon: 'email', delay: 4 },
        { id: 'engage',   type: 'action',   x: 710, y: 20,  label: 'Engage', sub: 'Auto-reply comments', icon: 'notify', delay: 5 },
        { id: 'metrics',  type: 'output',   x: 710, y: 150, label: 'Analytics', sub: 'Performance tracking', icon: 'chart', delay: 6 },
      ],
      connections: [
        { from: 'calendar', to: 'generate', delay: 1 },
        { from: 'generate', to: 'review',   delay: 2 },
        { from: 'review',   to: 'publish',  delay: 3, label: 'Approved' },
        { from: 'review',   to: 'revise',   delay: 3, label: 'Needs Edit' },
        { from: 'publish',  to: 'engage',   delay: 4 },
        { from: 'publish',  to: 'metrics',  delay: 5 },
      ]
    },
    ecommerce: {
      label: 'E-Commerce',
      nodes: [
        { id: 'order',    type: 'trigger',  x: 30,  y: 80,  label: 'New Order', sub: 'Shopify / WooCommerce', icon: 'form', delay: 1 },
        { id: 'validate', type: 'ai',       x: 200, y: 80,  label: 'AI Validate', sub: 'Fraud check + inventory', icon: 'ai', delay: 2 },
        { id: 'decide',   type: 'decision', x: 370, y: 80,  label: 'Status', sub: 'In stock vs. backorder', icon: 'score', delay: 3 },
        { id: 'fulfill',  type: 'action',   x: 540, y: 20,  label: 'Fulfill', sub: 'Pick, pack, ship label', icon: 'check', delay: 4 },
        { id: 'backorder',type: 'data',     x: 540, y: 150, label: 'Backorder', sub: 'Notify customer + ETA', icon: 'notify', delay: 4 },
        { id: 'ship',     type: 'action',   x: 710, y: 20,  label: 'Ship', sub: 'Carrier API + tracking', icon: 'crm', delay: 5 },
        { id: 'followup', type: 'output',   x: 710, y: 150, label: 'Follow Up', sub: 'Review request + upsell', icon: 'email', delay: 6 },
      ],
      connections: [
        { from: 'order',    to: 'validate',  delay: 1 },
        { from: 'validate', to: 'decide',    delay: 2 },
        { from: 'decide',   to: 'fulfill',   delay: 3, label: 'In Stock' },
        { from: 'decide',   to: 'backorder', delay: 3, label: 'Out' },
        { from: 'fulfill',  to: 'ship',      delay: 4 },
        { from: 'ship',     to: 'followup',  delay: 5 },
      ]
    },
  };

  // =========================================================================
  // SVG ICON TEMPLATES
  // =========================================================================
  const icons = {
    form:   '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    ai:     '<path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z" stroke="currentColor" fill="none" stroke-width="2"/><circle cx="10" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor"/>',
    score:  '<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>',
    notify: '<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    email:  '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    crm:    '<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="currentColor" fill="none" stroke-width="2"/>',
    chart:  '<path d="M16 8v8m-4-5v5m-4-2v2m-2 4h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    check:  '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    ticket: '<path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  // =========================================================================
  // RENDER FLOWCHART
  // =========================================================================
  function renderWorkflow(workflowKey, container) {
    var wf = workflows[workflowKey];
    if (!wf || !container) return;

    var canvas = container.querySelector('.flowchart__canvas');
    if (!canvas) return;

    // Clear
    canvas.innerHTML = '';

    // Node center offsets (half of 72px box + label area)
    var cx = 36;
    var cy = 36;

    // Build SVG for connections
    var svgNS = 'http://www.w3.org/2000/svg';
    var connDiv = document.createElement('div');
    connDiv.className = 'flowchart__connections';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 900 320');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // Arrow marker
    var defs = document.createElementNS(svgNS, 'defs');
    var marker = document.createElementNS(svgNS, 'marker');
    marker.setAttribute('id', 'fc-arrowhead-' + workflowKey);
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '9');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');
    var polygon = document.createElementNS(svgNS, 'polygon');
    polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
    polygon.setAttribute('class', 'fc-arrow');
    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.appendChild(defs);

    // Build node lookup
    var nodeMap = {};
    wf.nodes.forEach(function (n) {
      nodeMap[n.id] = n;
    });

    // Draw connections
    wf.connections.forEach(function (conn) {
      var fromNode = nodeMap[conn.from];
      var toNode = nodeMap[conn.to];
      if (!fromNode || !toNode) return;

      var x1 = fromNode.x + cx + 36;
      var y1 = fromNode.y + cy;
      var x2 = toNode.x + cx - 40;
      var y2 = toNode.y + cy;

      // Create curved path
      var midX = (x1 + x2) / 2;
      var d = 'M' + x1 + ',' + y1 + ' C' + midX + ',' + y1 + ' ' + midX + ',' + y2 + ' ' + x2 + ',' + y2;

      var path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('class', 'fc-line');
      path.setAttribute('data-delay', conn.delay);
      path.setAttribute('marker-end', 'url(#fc-arrowhead-' + workflowKey + ')');
      path.id = 'path-' + conn.from + '-' + conn.to;

      // Measure path length for dash animation
      svg.appendChild(path);

      // Animated particle
      var circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('class', 'fc-particle');
      circle.setAttribute('r', '4');

      var animMotion = document.createElementNS(svgNS, 'animateMotion');
      animMotion.setAttribute('dur', '2.5s');
      animMotion.setAttribute('repeatCount', 'indefinite');
      animMotion.setAttribute('begin', (conn.delay * 0.3 + 1.5) + 's');
      var mpath = document.createElementNS(svgNS, 'mpath');
      mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#path-' + conn.from + '-' + conn.to);
      animMotion.appendChild(mpath);
      circle.appendChild(animMotion);
      svg.appendChild(circle);

      // Connection label
      if (conn.label) {
        var textEl = document.createElementNS(svgNS, 'text');
        var labelX = midX;
        var labelY = (y1 + y2) / 2 - 8;
        textEl.setAttribute('x', labelX);
        textEl.setAttribute('y', labelY);
        textEl.setAttribute('text-anchor', 'middle');
        textEl.setAttribute('font-size', '11');
        textEl.setAttribute('font-weight', '600');
        textEl.setAttribute('fill', '#64748B');
        textEl.setAttribute('font-family', 'Inter, sans-serif');
        textEl.textContent = conn.label;
        svg.appendChild(textEl);
      }
    });

    connDiv.appendChild(svg);
    canvas.appendChild(connDiv);

    // Draw nodes
    wf.nodes.forEach(function (n) {
      var nodeEl = document.createElement('div');
      nodeEl.className = 'fc-node fc-node--' + n.type;
      nodeEl.setAttribute('data-delay', n.delay);
      nodeEl.style.left = n.x + 'px';
      nodeEl.style.top = n.y + 'px';

      var box = document.createElement('div');
      box.className = 'fc-node__box';
      box.innerHTML = '<svg viewBox="0 0 24 24" width="32" height="32">' + (icons[n.icon] || icons.check) + '</svg>';

      var label = document.createElement('div');
      label.className = 'fc-node__label';
      label.textContent = n.label;

      nodeEl.appendChild(box);
      nodeEl.appendChild(label);

      // Hover detail tooltip
      if (n.sub) {
        var detail = document.createElement('div');
        detail.className = 'fc-node__detail';
        detail.textContent = n.sub;
        nodeEl.appendChild(detail);
      }

      canvas.appendChild(nodeEl);
    });

    // Set path lengths for dash animation
    requestAnimationFrame(function () {
      svg.querySelectorAll('.fc-line').forEach(function (path) {
        var len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
      });
    });
  }

  // =========================================================================
  // TAB SWITCHING
  // =========================================================================
  function setupTabs(container) {
    var tabs = container.querySelectorAll('.flowchart__tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var wfKey = tab.getAttribute('data-workflow');
        renderWorkflow(wfKey, container);

        // Trigger reveal immediately since already in view
        revealFlowchart(container);
      });
    });
  }

  // =========================================================================
  // SCROLL-TRIGGERED REVEAL
  // =========================================================================
  function revealFlowchart(container) {
    container.querySelectorAll('.fc-node').forEach(function (node) {
      node.classList.add('revealed');
    });
    container.querySelectorAll('.fc-line').forEach(function (line) {
      line.classList.add('revealed');
    });
    container.querySelectorAll('.fc-particle').forEach(function (p) {
      p.classList.add('revealed');
    });
  }

  function setupObserver() {
    var flowcharts = document.querySelectorAll('.flowchart');
    if (!flowcharts.length) return;

    if (!('IntersectionObserver' in window)) {
      flowcharts.forEach(revealFlowchart);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revealFlowchart(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    flowcharts.forEach(function (fc) {
      observer.observe(fc);
    });
  }

  // =========================================================================
  // INIT
  // =========================================================================
  var containers = document.querySelectorAll('.flowchart');
  containers.forEach(function (container) {
    setupTabs(container);

    // Render default (first active tab)
    var activeTab = container.querySelector('.flowchart__tab.active');
    if (activeTab) {
      renderWorkflow(activeTab.getAttribute('data-workflow'), container);
    }
  });

  setupObserver();
});
