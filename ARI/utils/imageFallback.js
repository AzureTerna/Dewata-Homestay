window.setAltPlaceholder = function (e) {
    try {
        const alt = e && e.currentTarget ? e.currentTarget.alt : (typeof e === 'string' ? e : '') || '';
        const safeAlt = String(alt).replace(/\n/g, ' ').replace(/"/g, "'");
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect fill='%23f3f4f6' width='100%' height='100%'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%236b7280'>${safeAlt}</text></svg>`;
        (e.currentTarget || e.target).src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    } catch (err) {
        try { (e.currentTarget || e.target).src = ''; } catch (e) {}
    }
};
