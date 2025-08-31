import { useState, useEffect } from "react";
import {
  Github,
  Download,
  Copy,
  ChevronRight,
  Zap,
  Package,
  Shield,
  GitBranch,
  Terminal,
  Star,
  Users,
  FileCode2,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Code,
  Folder,
  Database,
  Cloud,
  Heart,
  Mail,
  ExternalLink,
  Globe,
} from "lucide-react";

const App = () => {
  const [copiedCommand, setCopiedCommand] = useState("");
  const [currentFeature, setCurrentFeature] = useState(0);

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  const [starsCount, setStarsCount] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.github.com/repos/tanmayvaij/snapcube")
      .then((res) => res.json())
      .then((repoStats) => setStarsCount(repoStats.stargazers_count))
      .catch(() => setStarsCount("⭐"));
  }, []);

  const features = [
    {
      icon: Package,
      title: "Local Project Cloning",
      desc: "Snapshot entire directory structures instantly",
    },
    {
      icon: GitBranch,
      title: "GitHub Integration",
      desc: "Clone public & private repos directly to JSON",
    },
    {
      icon: Globe,
      title: "GitLab Support",
      desc: "Full GitLab repository cloning with authentication",
    },
    {
      icon: Shield,
      title: "Binary Safe",
      desc: "Handles all file types with perfect fidelity",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Minimal overhead, maximum performance",
    },
    {
      icon: FileCode2,
      title: "Structure-Only Mode",
      desc: "Lightweight file path arrays for AI analysis",
    },
  ];

  const useCases = [
    {
      icon: FileCode2,
      title: "Project Templates",
      description: "Create reusable project scaffolding for teams",
      examples: [
        "React starter kits",
        "API boilerplates",
        "Configuration sets",
      ],
    },
    {
      icon: Cloud,
      title: "Backup & Archive",
      description: "Lightweight backups without Git overhead",
      examples: ["Project snapshots", "Version archives", "Code checkpoints"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share codebases instantly without repositories",
      examples: ["Code reviews", "Onboarding packages", "Training materials"],
    },
    {
      icon: Database,
      title: "AI Integration",
      description: "Send entire codebases to AI assistants",
      examples: ["Code analysis", "Bug detection", "Documentation generation"],
    },
  ];

  const commands = [
    {
      title: "Basic Local Cloning",
      command: "snapcube clone ./my-project",
      description:
        "Creates my-project.snapcube.json with full project structure",
    },
    {
      title: "Skip Binary Files",
      command: "snapcube clone ./my-project --ignore-binaries",
      description: "Excludes images, videos, and other binary content",
    },
    {
      title: "Structure Only",
      command: "snapcube clone ./my-project --structure-only",
      description: "Returns just file paths array - perfect for AI analysis",
    },
    {
      title: "GitHub Public Repo",
      command: "snapcube clone-repo github:facebook/react@main",
      description:
        "Downloads React repository structure to facebook_react.snapcube.json",
    },
    {
      title: "GitHub Private Repo",
      command: "snapcube clone-repo github:myorg/secret@main --token ghp_xxx",
      description: "Access private repositories with personal access token",
    },
    {
      title: "GitLab Repository",
      command: "snapcube clone-repo gitlab:username/project@main",
      description: "Clone GitLab repositories with full authentication support",
    },
    {
      title: "GitLab Private Repo",
      command: "snapcube clone-repo gitlab:myorg/private@main --token glpat_xxx",
      description: "Clone private GitLab repos with personal access token",
    },
    {
      title: "Project Restoration",
      command: "snapcube create my-project.snapcube.json",
      description: "Recreates the complete project from JSON snapshot",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Cloned", icon: Package },
    { number: `${starsCount}`, label: "GitHub Stars", icon: Star },
    { number: "< 1s", label: "Average Clone Time", icon: Zap },
    { number: "100%", label: "Binary Fidelity", icon: Shield },
  ];

  const faqs = [
    {
      question: "What's new in Snapcube 2.0?",
      answer:
        "Snapcube 2.0 introduces GitLab support, improved GitHub integration with better authentication, structure-only mode for AI analysis, enhanced error handling, and a completely rewritten codebase with TypeScript for better reliability.",
    },
    {
      question: "What file types are supported?",
      answer:
        "Snapcube supports all file types including binary files (images, videos, PDFs, executables), text files, and complex directory structures. Binary files are encoded in base64 for perfect preservation.",
    },
    {
      question: "How does the structure-only mode work?",
      answer:
        "The --structure-only flag returns just an array of file paths without metadata or content, making it perfect for AI/LLM analysis of project structure, tech stack identification, and lightweight snapshots.",
    },
    {
      question: "Can I use this for private repositories?",
      answer:
        "Yes! Use the --token flag with your GitHub or GitLab Personal Access Token to clone private repositories. Your token is never stored and only used for the API call.",
    },
    {
      question: "Does it work with monorepos?",
      answer:
        "Absolutely! Snapcube handles complex nested structures perfectly, making it ideal for monorepos, multi-package projects, and deeply nested codebases.",
    },
    {
      question: "What's the difference between GitHub and GitLab cloning?",
      answer:
        "Both platforms are fully supported with the same feature set. Use github:owner/repo@branch for GitHub and gitlab:owner/repo@branch for GitLab. Authentication works the same way with --token for both platforms.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Snapcube
            </span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
              v2.0
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#usage"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Usage
            </a>
            <a
              href="#examples"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Examples
            </a>
            <a
              href="#install"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Install
            </a>
            <a
              href="#faq"
              className="text-white hover:text-blue-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="https://github.com/tanmayvaij/snapcube"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">
              v2.0.0 - GitLab Support & Enhanced Features
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Clone & Recreate
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Any Project
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform entire project structures into lightweight JSON snapshots
            and recreate them anywhere.
            <span className="text-blue-400 font-semibold">
              {" "}
              Perfect for templates, backups, AI analysis, and team
              collaboration.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://www.npmjs.com/package/snapcube"
              target="_blank"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Get Started Free</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/tanmayvaij/snapcube"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Feature Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  currentFeature === index
                    ? "bg-blue-500/10 border-blue-500/30 shadow-xl shadow-blue-500/10 scale-105"
                    : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50"
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <feature.icon
                  className={`w-6 h-6 mb-3 ${
                    currentFeature === index ? "text-blue-400" : "text-white"
                  }`}
                />
                <h3 className="font-semibold mb-2 text-xs">{feature.title}</h3>
                <p className="text-xs text-white">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section
        id="install"
        className="relative z-10 px-6 py-20 bg-gradient-to-r from-slate-900/50 to-blue-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Install in Seconds
            </span>
          </h2>
          <p className="text-xl text-white text-center mb-16 max-w-2xl mx-auto">
            Choose your preferred installation method and start cloning projects
            immediately
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Global Install */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Global Install</h3>
              </div>
              <p className="text-white mb-6">
                Recommended for frequent use and team workflows
              </p>
              <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">
                    npm install -g snapcube
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard("npm install -g snapcube", "global")
                    }
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {copiedCommand === "global" ? (
                      <span className="text-green-400">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Available system-wide</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No download delays</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Works in any directory</span>
                </div>
              </div>
            </div>

            {/* NPX Usage */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">
                  Use Without Installing
                </h3>
              </div>
              <p className="text-white mb-6">
                Perfect for one-time usage or testing the tool
              </p>
              <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400">
                    npx snapcube clone ./my-project
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard("npx snapcube clone ./my-project", "npx")
                    }
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {copiedCommand === "npx" ? (
                      <span className="text-green-400">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>No installation required</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Always latest version</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Perfect for CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Code className="w-5 h-5 text-blue-400" />
              <span>System Requirements</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-medium">Node.js 18+</div>
                <div className="text-white text-sm">
                  Modern JavaScript runtime
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-medium">Cross Platform</div>
                <div className="text-white text-sm">Windows, macOS, Linux</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-medium">TypeScript Built</div>
                <div className="text-white text-sm">
                  Reliable and type-safe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command Examples */}
      <section
        id="examples"
        className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-900/10 to-slate-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Command Reference
            </span>
          </h2>
          <p className="text-xl text-white text-center mb-16 max-w-3xl mx-auto">
            Master all Snapcube commands with these practical examples
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {commands.map((cmd, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/20 transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-300">
                  {cmd.title}
                </h3>
                <div className="bg-slate-900/80 rounded-lg p-4 mb-4 border border-slate-700">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-green-400">
                      {cmd.command}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(cmd.command, `cmd-${index}`)
                      }
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {copiedCommand === `cmd-${index}` ? (
                        <span className="text-green-400 text-xs">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-white text-sm">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub & GitLab Integration Showcase */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-900/20 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GitHub & GitLab Integration
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Clone any repository directly to JSON without manual downloads. Full support for both platforms with seamless authentication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* GitHub */}
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-6">
                <Github className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold">GitHub Repositories</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <span className="text-blue-400">
                    snapcube clone-repo github:facebook/react@main
                  </span>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <span className="text-green-400">
                    snapcube clone-repo github:myorg/private@main
                  </span>
                  <br />
                  <span className="text-slate-500">--token ghp_xxx123abc</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Public & private repositories</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Personal access token support</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Organization repos supported</span>
                </div>
              </div>
            </div>

            {/* GitLab */}
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/20 transition-all">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-semibold">GitLab Repositories</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <span className="text-orange-400">
                    snapcube clone-repo gitlab:username/project@main
                  </span>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700">
                  <span className="text-green-400">
                    snapcube clone-repo gitlab:myorg/private@main
                  </span>
                  <br />
                  <span className="text-slate-500">--token glpat_xxx123abc</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Full GitLab.com integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Private repository access</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Group projects supported</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Structure-Only Feature */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">New in v2.0</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Structure-Only Mode</h3>
              <p className="text-white max-w-2xl mx-auto">
                Perfect for AI analysis and lightweight snapshots - get just the file paths without content or metadata
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-purple-300">Regular Mode Output</h4>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-xs border border-slate-700">
                  <pre className="text-slate-400">{`[
  {
    "fileName": "package.json",
    "filePath": "my-project",
    "content": "{ ... }",
    "isBinary": false,
    "encoding": "utf-8"
  }
]`}</pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-300">Structure-Only Mode</h4>
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-xs border border-slate-700">
                  <pre className="text-slate-400">{`[
  "my-project/package.json",
  "my-project/src/index.js",
  "my-project/src/components/App.jsx",
  "my-project/README.md"
]`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section id="usage" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Simple Three-Step Process
            </span>
          </h2>
          <p className="text-xl text-white text-center mb-16 max-w-3xl mx-auto">
            Whether you're cloning local projects or remote repositories, the workflow is always the same
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Step 1 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Clone & Capture</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-slate-900/80 rounded-lg p-3 font-mono text-sm border border-slate-700">
                    <span className="text-blue-400">
                      snapcube clone ./my-project
                    </span>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 font-mono text-sm border border-slate-700">
                    <span className="text-green-400">
                      snapcube clone-repo github:facebook/react@main
                    </span>
                  </div>
                </div>
                <p className="text-white">
                  Capture your entire project structure, file contents, and
                  metadata into a single JSON file. Works with local directories
                  and remote repositories.
                </p>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Share & Distribute</h3>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 mb-6 border border-slate-700 text-center">
                  <Folder className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <span className="text-cyan-400 font-mono text-sm">
                    my-project.snapcube.json
                  </span>
                </div>
                <p className="text-white">
                  Share the lightweight JSON file through any method - email,
                  cloud storage, version control, or send directly to AI
                  assistants for analysis.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <div className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                    Email
                  </div>
                  <div className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                    Cloud
                  </div>
                  <div className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                    AI
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/30 transition-all h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Recreate Instantly</h3>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 mb-6 font-mono text-sm border border-slate-700">
                  <span className="text-green-400">
                    snapcube create my-project.snapcube.json
                  </span>
                </div>
                <p className="text-white">
                  Rebuild the exact project structure anywhere with perfect
                  fidelity. All files, directories, and metadata are restored
                  exactly as they were.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-white">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Perfect file restoration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-white">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Binary files preserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect For Every Workflow
            </span>
          </h2>
          <p className="text-xl text-white text-center mb-16 max-w-3xl mx-auto">
            From development to production, Snapcube fits seamlessly into your
            existing workflow
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-white text-sm mb-4">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.examples.map((example, i) => (
                    <div
                      key={i}
                      className="text-xs text-slate-200 bg-slate-700/30 px-2 py-1 rounded"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Real-world Examples */}
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Real-World Scenarios
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-blue-300">
                  Startup Workflows
                </h4>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Quickly share MVP prototypes with investors</li>
                  <li>• Create standardized project templates for team</li>
                  <li>• Backup critical code before major refactors</li>
                  <li>• Send complete codebases to freelance developers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-300">
                  Enterprise Use
                </h4>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Archive legacy projects for compliance</li>
                  <li>• Create deployment packages for air-gapped systems</li>
                  <li>• Share code with external audit teams securely</li>
                  <li>• Distribute internal libraries and frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-white text-center mb-16">
            Everything you need to know about Snapcube
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button className="w-full text-left p-6 hover:bg-slate-700/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-blue-300">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-white leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Join thousands of developers who trust Snapcube for project cloning,
            backup, and sharing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.npmjs.com/package/snapcube"
              target="_blank"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Install Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/tanmayvaij/snapcube"
              target="_blank"
              className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
              <Star className="w-5 h-5" />
            </a>
          </div>

          <div className="text-white">
            <p className="mb-2">Quick start:</p>
            <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm border border-slate-700 max-w-md mx-auto">
              <span className="text-green-400">npm install -g snapcube</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Snapcube
                </span>
              </div>
              <p className="text-white mb-4 max-w-md">
                The fastest way to clone, backup, and recreate any project
                structure. Binary-safe, lightning-fast, and stupidly simple.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tanmayvaij/snapcube"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.npmjs.com/package/snapcube"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Package className="w-5 h-5" />
                </a>
                <a
                  href="mailto:tanmayvaij22@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-blue-300">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#install"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#usage"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    Usage Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#examples"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-blue-300">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/tanmayvaij/snapcube"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/snapcube"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    npm Package
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tanmayvaij/snapcube/issues"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tanmayvaij/snapcube/blob/main/LICENSE"
                    className="text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 text-center">
            <p className="text-white text-sm mb-2">
              Made with <Heart className="w-4 h-4 inline text-red-400" /> by{" "}
              <a
                href="https://github.com/tanmayvaij"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Tanmay Vaij
              </a>
            </p>
            <p className="text-white text-xs">
              © 2025 Snapcube. Released under the MIT License.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;