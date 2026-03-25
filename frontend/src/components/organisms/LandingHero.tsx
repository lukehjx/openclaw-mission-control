"use client";

import Link from "next/link";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  isClerkEnabled,
} from "@/auth/clerk";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function LandingHero() {
  const clerkEnabled = isClerkEnabled();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">任务控制台</div>
          <h1>
            指挥 <span className="hero-highlight">自主工作。</span>
            <br />
            保持人类监督。
          </h1>
          <p>
            在统一指挥中心跟踪任务、审批和智能体状态。实时获取工作变更信号，不遗漏任何执行细节。
          </p>

          <div className="hero-actions">
            <SignedOut>
              {clerkEnabled ? (
                <>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards"
                    signUpForceRedirectUrl="/boards"
                  >
                    <button type="button" className="btn-large primary">
                      查看看板 <ArrowIcon />
                    </button>
                  </SignInButton>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards/new"
                    signUpForceRedirectUrl="/boards/new"
                  >
                    <button type="button" className="btn-large secondary">
                      创建看板
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/boards" className="btn-large primary">
                    查看看板 <ArrowIcon />
                  </Link>
                  <Link href="/boards/new" className="btn-large secondary">
                    创建看板
                  </Link>
                </>
              )}
            </SignedOut>

            <SignedIn>
              <Link href="/boards" className="btn-large primary">
                查看看板 <ArrowIcon />
              </Link>
              <Link href="/boards/new" className="btn-large secondary">
                创建看板
              </Link>
            </SignedIn>
          </div>

          <div className="hero-features">
            {["智能体优先运营", "审批队列", "实时信号"].map(
              (label) => (
                <div key={label} className="hero-feature">
                  <div className="feature-icon">✓</div>
                  <span>{label}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="command-surface">
          <div className="surface-header">
            <div className="surface-title">指挥界面</div>
            <div className="live-indicator">
              <div className="live-dot" />
              LIVE
            </div>
          </div>
          <div className="surface-subtitle">
            <h3>高效推进工作，不遗漏任何进展。</h3>
            <p>
              任务、审批和智能体状态在整个看板上保持同步。
            </p>
          </div>
          <div className="metrics-row">
            {[
              { label: "看板", value: "12" },
              { label: "智能体", value: "08" },
              { label: "任务", value: "46" },
            ].map((item) => (
              <div key={item.label} className="metric">
                <div className="metric-value">{item.value}</div>
                <div className="metric-label">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="surface-content">
            <div className="content-section">
              <h4>看板 — 进行中</h4>
              {[
                "准备发布候选版本",
                "处理审批积压",
                "稳定智能体交接",
              ].map((title) => (
                <div key={title} className="status-item">
                  <div className="status-icon progress">⊙</div>
                  <div className="status-item-content">
                    <div className="status-item-title">{title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-section">
              <h4>审批 — 3 个待处理</h4>
              {[
                { title: "部署窗口已确认", status: "ready" as const },
                { title: "内容已审核", status: "waiting" as const },
                { title: "安全审批", status: "waiting" as const },
              ].map((item) => (
                <div key={item.title} className="approval-item">
                  <div className="approval-title">{item.title}</div>
                  <div className={`approval-badge ${item.status}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: "2rem",
              borderTop: "1px solid var(--neutral-200)",
            }}
          >
            <div className="content-section">
              <h4>信号 — 刚刚更新</h4>
              {[
                { text: "智能体 Delta 将任务移至待审核", time: "Now" },
                { text: "增长运营到达 WIP 限制", time: "5m" },
                { text: "发布流水线已稳定", time: "12m" },
              ].map((signal) => (
                <div key={signal.text} className="signal-item">
                  <div className="signal-text">{signal.text}</div>
                  <div className="signal-time">{signal.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="capabilities">
        <div className="features-grid">
          {[
            {
              title: "看板即运营地图",
              description:
                "一目了然地查看任务、优先级、依赖关系和负责人。",
            },
            {
              title: "流动的审批",
              description:
                "排队、评论、审批，不丢失上下文，不拖慢执行。",
            },
            {
              title: "实时信号",
              description:
                "实时查看工作变化：任务、智能体状态和审批实时更新。",
            },
            {
              title: "内置审计追踪",
              description:
                "每个决策都留有记录，使看板保持可解释性和可审查性。",
            },
          ].map((feature, idx) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-number">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>从一个看板开始，发展成为指挥中心。</h2>
          <p>
            接入一个看板，指定主智能体，从第一天起就保持审批和信号可见。
          </p>
          <div className="cta-actions">
            <SignedOut>
              {clerkEnabled ? (
                <>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards/new"
                    signUpForceRedirectUrl="/boards/new"
                  >
                    <button type="button" className="btn-large white">
                      创建看板
                    </button>
                  </SignInButton>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/boards"
                    signUpForceRedirectUrl="/boards"
                  >
                    <button type="button" className="btn-large outline">
                      查看看板
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/boards/new" className="btn-large white">
                    创建看板
                  </Link>
                  <Link href="/boards" className="btn-large outline">
                    查看看板
                  </Link>
                </>
              )}
            </SignedOut>

            <SignedIn>
              <Link href="/boards/new" className="btn-large white">
                创建看板
              </Link>
              <Link href="/boards" className="btn-large outline">
                查看看板
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
    </>
  );
}
