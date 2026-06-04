
// --- Dark Theme Shadcn UI Component Replicas ---
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl border border-neutral-800 bg-[#262626] text-neutral-100 shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = '', children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 pb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h3 className={`text-sm font-bold uppercase tracking-wider text-neutral-300 ${className}`}>{children}</h3>
);

const CardContent = ({ className = '', children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const Badge = ({ variant = 'default', className = '', children }) => {
  const variants = {
    default: 'border-transparent bg-neutral-800 text-neutral-100 shadow hover:bg-neutral-700',
    destructive: 'border-transparent bg-red-950/50 text-red-400 border border-red-900 shadow hover:bg-red-900/50',
    success: 'border-transparent bg-emerald-950/50 text-emerald-400 border border-emerald-900 shadow hover:bg-emerald-900/50',
    outline: 'text-neutral-200 border-neutral-700',
  };
  return (
    <div className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

// --- Main Application ---
export default function App() {
  // Compute mathematically precise points for an O(n^3) cubic curve
  const n3Points = Array.from({ length: 50 }, (_, i) => {
    const t = i / 49; // normalized progress from 0 to 1
    const x = t * 280; // scale to fit width
    const y = 180 - 160 * Math.pow(t, 3); // n^3 curve scaled to fit height
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const curvePath = `M 0 180 L ${n3Points.join(' L ')}`;
  const fillPath = `${curvePath} L 280 180 Z`;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .font-modern {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
        `}
      </style>
      <div className="min-h-screen bg-[#121212] p-4 font-modern text-neutral-200 md:p-8 md:px-12 lg:px-24">
        {/* Main Printable Container */}
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-lg border border-neutral-800 bg-[#1a1a1a] p-6 sm:p-12 shadow-2xl">

          {/* Header */}
          <div className="mb-2 border-b border-neutral-800 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">GRIP — MHP Analysis</h1>
            <p className="text-neutral-400 text-sm font-medium">From the paper <cite> Practical MHP Analysis for Java</cite> &nbsp; by A. Samuel Moses and V. Krishna Nandivada, 2026</p>
          </div>

          {/* SECTION 1: WHAT IS MHP */}
          <Card>
            <CardHeader>
              <CardTitle>1. What is MHP?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-sm text-neutral-300">
                A technique for computing a mapping of <strong className="font-bold text-white"> statements which execute in parallel </strong> in a program without actually running it
              </p>

              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
                {/* Flowchart */}
                <div>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-neutral-100">Execution Flow</h4>

                  <div className="flex justify-center rounded-xl border border-neutral-800 bg-[#1e1e1e] p-6 font-mono text-sm shadow-inner overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max">
                      <div className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 font-bold text-neutral-200 shadow-sm">m₁</div>
                      <div className="text-neutral-500">→</div>
                      <div className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 font-bold text-neutral-200 shadow-sm">m₂</div>
                      <div className="text-neutral-500">→</div>
                      <div className="rounded-lg border border-amber-500/50 bg-amber-950/30 px-3 py-1.5 font-bold text-amber-400 shadow-sm">fork</div>

                      {/* Arrow branches from fork */}
                      <svg width="28" height="126" viewBox="0 0 28 126" className="text-neutral-500">
                        <defs>
                          <marker id="arrowhead-fork" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
                          </marker>
                        </defs>
                        <path d="M 0 63 L 10 63 L 10 17 L 24 17" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-fork)" />
                        <path d="M 0 63 L 24 63" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-fork)" />
                        <path d="M 0 63 L 10 63 L 10 109 L 24 109" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-fork)" />
                      </svg>

                      <div className="flex flex-col gap-3">
                        <div className="rounded-lg border border-blue-500/50 bg-blue-950/30 px-3 py-1.5 font-bold text-blue-400 shadow-sm text-center">t₁</div>
                        <div className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 font-bold text-neutral-200 shadow-sm text-center">m₃</div>
                        <div className="rounded-lg border border-blue-500/50 bg-blue-950/30 px-3 py-1.5 font-bold text-blue-400 shadow-sm text-center">t₂</div>
                      </div>

                      {/* Arrow merges into join */}
                      <svg width="28" height="126" viewBox="0 0 28 126" className="text-neutral-500">
                        <defs>
                          <marker id="arrowhead-join" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
                          </marker>
                        </defs>
                        <path d="M 0 17 L 14 17 L 14 63 L 24 63" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-join)" />
                        <path d="M 0 63 L 24 63" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-join)" />
                        <path d="M 0 109 L 14 109 L 14 63 L 24 63" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead-join)" />
                      </svg>

                      <div className="rounded-lg border border-amber-500/50 bg-amber-950/30 px-3 py-1.5 font-bold text-amber-400 shadow-sm">join</div>
                      <div className="text-neutral-500">→</div>
                      <div className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 font-bold text-neutral-200 shadow-sm">m₄</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-neutral-800 pt-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 shrink-0 rounded-sm border border-amber-500/50 bg-amber-950/30"></div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Fork / Join:</span>
                        <span className="ml-1 text-xs text-neutral-400">"Fork" spawns parallel tasks. "Join" waits for them all to finish</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 shrink-0 rounded-sm border border-blue-500/50 bg-blue-950/30"></div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Spawned Threads:</span>
                        <span className="ml-1 text-xs text-neutral-400">The separate tasks that are executing in parallel</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MHP Table */}
                <div>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-neutral-100">MHP Pairs</h4>
                  <p className="mb-6 text-sm text-neutral-300">This mapping is the output of an MHP analysis</p>
                  <div className="overflow-hidden rounded-lg border border-neutral-700 shadow-md">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#1e1e1e] text-xs text-neutral-400 uppercase tracking-wider font-bold border-b border-neutral-700">
                          <th className="px-4 py-3 border-r border-neutral-700">Statement</th>
                          <th className="px-4 py-3">Parallel running Statements</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700 text-neutral-300">
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3 font-bold text-white border-r border-neutral-700 bg-[#222]">m₁, m₂, m₄</td>
                          <td className="px-4 py-3 font-mono text-neutral-500">no statements</td>
                        </tr>
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3 font-bold text-white border-r border-neutral-700 bg-[#222]">m₃</td>
                          <td className="px-4 py-3 font-mono font-medium text-neutral-200">{'{ t₁, t₂ }'}</td>
                        </tr>
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3 font-bold text-white border-r border-neutral-700 bg-[#222]">t₁</td>
                          <td className="px-4 py-3 font-mono font-medium text-neutral-200">{'{ m₃, t₂ }'}</td>
                        </tr>
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3 font-bold text-white border-r border-neutral-700 bg-[#222]">t₂</td>
                          <td className="px-4 py-3 font-mono font-medium text-neutral-200">{'{ m₃, t₁ }'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">

            {/* SECTION 2: USES OF MHP ANALYSIS */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>2. Uses of MHP Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 flex-1">

                {/* Data Race - Targeted Graphic */}
                <div>
                  <h4 className="mb-3 text-sm font-bold text-white">Data Races</h4>
                  <p className="mb-6 text-sm text-neutral-300">When two threads try write to the same memory location at the same time</p>
                  <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-[#1e1e1e] p-6 shadow-sm">

                    <div className="relative w-full h-[140px] max-w-[340px] flex justify-center">
                      {/* Blast Graphic (Behind) */}
                      <svg className="absolute top-[10px] left-[110px] w-[120px] h-[120px] z-0" viewBox="0 0 100 100">
                        <defs>
                          <radialGradient id="blastGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                            <stop offset="60%" stopColor="#f97316" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <polygon points="50,5 60,35 95,20 70,45 95,75 60,65 50,95 40,65 5,75 30,45 5,20 40,35" fill="url(#blastGrad)" />
                      </svg>

                      {/* SVG connecting lines with arrows */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 340 140">
                        <defs>
                          <marker id="arrowhead-race" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                            <polygon points="0 0, 5 2.5, 0 5" fill="#f87171" />
                          </marker>
                        </defs>
                        {/* Arrow from t1 (left) to shared mem */}
                        <line x1="95" y1="70" x2="130" y2="70" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowhead-race)" />
                        {/* Arrow from t2 (right) to shared mem */}
                        <line x1="245" y1="70" x2="210" y2="70" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowhead-race)" />
                      </svg>

                      {/* HTML Nodes */}
                      <div className="absolute top-[55px] left-[20px] bg-[#e0f2fe] text-[#1e3a8a] font-mono text-[11px] px-3 py-1.5 rounded-md shadow-sm font-bold tracking-wider z-20">t₁ write</div>

                      <div className="absolute top-[50px] left-[135px] bg-[#ffedd5] text-[#9a3412] font-mono text-[10px] leading-tight px-3 py-2 rounded-md shadow-md font-bold text-center z-20 border border-orange-300">shared<br />mem M</div>

                      <div className="absolute top-[55px] right-[20px] bg-[#e0f2fe] text-[#1e3a8a] font-mono text-[11px] px-3 py-1.5 rounded-md shadow-sm font-bold tracking-wider z-20">t₂ write</div>
                    </div>

                    <div className="mt-2 text-center">
                      <div className="text-red-500 text-xs font-bold">
                        ✗ race condition — don't know which value was written last
                      </div>
                      <div className="mt-1 text-white text-[11px] font-medium">
                        This unpredictability can cause bugs. MHP analysis can unearth such accesses
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compiler Optimization - Targeted Graphic */}
                <div className="mt-2 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 border border-blue-800/50 shadow-sm mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">Compiler Optimization</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Compilers can output more optimized code if they have more reliable information from MHP analysis
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* SECTION 3: Compute Intensity */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>3. Compute Intensity of MHP analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">

                <p className="mb-4 text-[13px] text-neutral-400 leading-relaxed">
                  In the worst case, time to compute standard MHP analysis grows <strong className="text-white font-bold">cubically</strong> in relation to input program size
                </p>

                {/* Vertical split layout: Stats on left, Graph on right */}
                <div className="flex flex-col lg:flex-row gap-4 flex-1">

                  {/* Left Stat Column */}
                  <div className="flex flex-row lg:flex-col gap-3 lg:w-[35%] shrink-0">
                    <div className="bg-[#333333] rounded-lg p-3 flex flex-col justify-center items-center text-center shadow-inner flex-1">
                      <span className="text-xl md:text-2xl lg:text-xl font-bold text-white mb-1">O(n³)</span>
                      <span className="text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Standard<br />MHP</span>
                    </div>
                    <div className="bg-[#333333] rounded-lg p-3 flex flex-col justify-center items-center text-center shadow-inner flex-1">
                      <span className="text-xl md:text-2xl lg:text-xl font-bold text-orange-400 mb-1">↑ 10x</span>
                      <span className="text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Graph nodes</span>
                    </div>
                    <div className="bg-[#333333] rounded-lg p-3 flex flex-col justify-center items-center text-center shadow-inner flex-1">
                      <span className="text-xl md:text-2xl lg:text-xl font-bold text-orange-400 mb-1">↑ 1000x</span>
                      <span className="text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Runtime</span>
                    </div>
                  </div>

                  {/* Exponential Chart (Right Column) */}
                  <div className="relative min-h-[220px] flex-1 w-full lg:w-[65%] bg-[#1e1e1e] rounded-lg border border-neutral-800 p-4 overflow-hidden flex flex-col justify-between shadow-inner">
                    {/* Grid background */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      opacity: 0.4
                    }}></div>

                    {/* Mathematically generated n^3 Curve SVG */}
                    <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none p-4 pb-8 pl-8 pt-6">
                      <path d={curvePath} fill="none" stroke="#fb923c" strokeWidth="3.5" vectorEffect="non-scaling-stroke" />
                      <path d={fillPath} fill="url(#curve-gradient)" opacity="0.4" />
                      <defs>
                        <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Axis Labels */}
                    <div className="z-10 flex h-full flex-col justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-wider absolute left-3 top-0 py-6">
                      <span className="-rotate-90 origin-left mt-24 whitespace-nowrap">Cost</span>
                    </div>

                    <div className="z-10 w-full mt-auto flex justify-between items-end text-[10px] text-neutral-500 font-bold px-4">
                      <span>0</span>
                      <span className="uppercase tracking-wider">Program Size</span>
                      <span>n</span>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* SECTION 4: GRIP Contribution */}
          <Card>
            <CardHeader>
              <CardTitle>4. Contribution of MHP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 items-start">

                {/* Analysis Precision */}
                <div>
                  <h4 className="mb-1.5 text-sm font-bold text-white">Analysis Precision</h4>
                  <p className="mb-3 text-[13px] text-neutral-400 leading-relaxed">
                    GRIP-MHP handles several parallelism-related constructs in a more precise manner
                  </p>

                  {/* Precision Table */}
                  <div className="overflow-hidden rounded-lg border border-neutral-700 shadow-md">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#1e1e1e] text-[10px] font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-700">
                          <th className="px-4 py-2.5 border-r border-neutral-700">Target</th>
                          <th className="px-4 py-2.5 border-r border-neutral-700">Reported MHP Set</th>
                          <th className="px-4 py-2.5 text-right">Result Quality</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700 bg-[#262626] text-neutral-300">
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3.5 font-bold text-white border-r border-neutral-700 bg-[#222]">t₁</td>
                          <td className="px-4 py-3.5 font-mono font-medium text-neutral-400 border-r border-neutral-700">{'{ m₃, m₄, t₂ }'}</td>
                          <td className="px-4 py-3.5 text-right"><Badge variant="destructive">✗ Imprecise</Badge></td>
                        </tr>
                        <tr className="hover:bg-[#2a2a2a] transition-colors">
                          <td className="px-4 py-3.5 font-bold text-white border-r border-neutral-700 bg-[#222]">t₁</td>
                          <td className="px-4 py-3.5 font-mono font-medium text-[#4ade80] border-r border-neutral-700">{'{ t₂,  m₃ }'}</td>
                          <td className="px-4 py-3.5 text-right"><Badge variant="success">✓ Precise</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Graph Compression */}
                <div>
                  <h4 className="mb-1.5 text-sm font-bold text-white">Graph Compression</h4>
                  <p className="mb-3 text-[13px] text-neutral-400 leading-relaxed">
                    GRIP-MHP is more efficient at removing unnecessary statements from program graphs. 
                    This compresses the program graph and therefore greatly reduces the time needed to complete the analysis.
                  </p>

                  <div className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-[#1e1e1e] p-4">
                    {/* Chart 1: Graph Size */}
                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-neutral-300">
                        <span>Program Graph Size (Nodes)</span>
                      </div>

                      {/* Standard Track */}
                      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-orange-400">
                        <span>Standard (21,759)</span>
                      </div>
                      <div className="relative mb-2.5 h-2.5 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="absolute left-0 top-0 h-full w-full rounded-full bg-orange-400"></div>
                      </div>

                      {/* Optimized Track */}
                      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-[#4ade80]">
                        <span>GRIP Compressed (1,839)</span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="absolute left-0 top-0 h-full w-[15%] rounded-full bg-[#4ade80]"></div>
                      </div>
                    </div>

                    {/* Chart 2: Runtime */}
                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-neutral-300">
                        <span>Analysis Runtime</span>
                      </div>

                      {/* Standard Track */}
                      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-orange-400">
                        <span>Standard (&gt; 2 hrs)</span>
                      </div>
                      <div className="relative mb-2.5 h-2.5 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="absolute left-0 top-0 h-full w-full rounded-full bg-orange-400"></div>
                      </div>

                      {/* Optimized Track */}
                      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-[#4ade80]">
                        <span>GRIP Optimized (14 sec)</span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="absolute left-0 top-0 h-full w-[5%] rounded-full bg-[#4ade80]"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}