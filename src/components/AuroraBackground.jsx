// AuroraBackground.jsx
const AuroraBackground = () => {
  return (
    <div
      id="bg-wrap"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 00 100 100" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(123, 0, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)" />
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(86, 228, 250, 0.31)" />
            <stop offset="100%" stopColor="rgba(83, 247, 228, 0)" />
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 247, 0, 0.15)" />
            <stop offset="100%" stopColor="rgba(204, 255, 0, 0)" />
          </radialGradient>
        </defs>

        {/* Circle 1 */}
        <circle cx="30" cy="30" r="15" fill="url(#Gradient1)">
          <animate attributeName="cx" values="30;70;30" dur="25s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;70;30" dur="30s" repeatCount="indefinite" />
        </circle>

        {/* Circle 2 */}
        <circle cx="70" cy="60" r="10" fill="url(#Gradient2)">
          <animate attributeName="cx" values="70;20;70" dur="28s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60;20;60" dur="34s" repeatCount="indefinite" />
        </circle>

        {/* Circle 3 */}
        <circle cx="50" cy="50" r="12" fill="url(#Gradient3)">
          <animate attributeName="cx" values="50;80;50" dur="32s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;10;50" dur="36s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default AuroraBackground;
