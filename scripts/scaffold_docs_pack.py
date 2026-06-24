#!/usr/bin/env python3
"""Create a project documentation pack skeleton.

This script only creates safe placeholder files and folders. It does not try to
write final project content; the agent should fill the files using the skill
references and the user's brief.
"""

from __future__ import annotations

import argparse
from pathlib import Path


ROOT_FILES = [
    "README.md",
    "AGENTS.md",
    ".env.example",
    "CHANGELOG.md",
    "logs/ACTIVITY.md",
    "logs/WORKLOG.md",
]


LITE_FILES = [
    "docs/README.md",
    "docs/01-product/PRD.md",
    "docs/02-requirements/FRS.md",
    "docs/02-requirements/NFR.md",
    "docs/03-architecture/System-Architecture.md",
    "docs/03-architecture/API-Design.md",
    "docs/03-architecture/ERD.md",
    "docs/03-architecture/Testing-Strategy.md",
    "docs/04-ux-and-flows/UX-Flows.md",
    "docs/05-project-plan/project_plan.md",
    "docs/06-engineering/Onboarding-Guide.md",
]


FULL_FILES = [
    "docs/README.md",
    "docs/01-product/PRD.md",
    "docs/01-product/Product-Vision.md",
    "docs/01-product/Scope.md",
    "docs/01-product/Personas.md",
    "docs/01-product/User-Journeys.md",
    "docs/01-product/Success-Metrics.md",
    "docs/01-product/Risks-Assumptions.md",
    "docs/01-product/Roadmap.md",
    "docs/02-requirements/BRS.md",
    "docs/02-requirements/FRS.md",
    "docs/02-requirements/FRS - Functional Requirements Specification.md",
    "docs/02-requirements/NFR.md",
    "docs/02-requirements/Non-Functional Requirements.md",
    "docs/02-requirements/User-Stories.md",
    "docs/02-requirements/Acceptance-Criteria.md",
    "docs/02-requirements/Requirements-Traceability-Matrix.md",
    "docs/02-requirements/Glossary.md",
    "docs/03-architecture/README.md",
    "docs/03-architecture/System-Architecture.md",
    "docs/03-architecture/Component-Architecture.md",
    "docs/03-architecture/Domain-Model.md",
    "docs/03-architecture/API-Design.md",
    "docs/03-architecture/Error-Handling-Strategy.md",
    "docs/03-architecture/Auth-Security.md",
    "docs/03-architecture/Security-Architecture.md",
    "docs/03-architecture/Threat-Model.md",
    "docs/03-architecture/Data-Architecture.md",
    "docs/03-architecture/ERD.md",
    "docs/03-architecture/Data-Dictionary.md",
    "docs/03-architecture/Data-Flow-Diagram.md",
    "docs/03-architecture/Indexing-Strategy.md",
    "docs/03-architecture/Migration-Plan.md",
    "docs/03-architecture/Integration-Architecture.md",
    "docs/03-architecture/Third-Party-Integrations.md",
    "docs/03-architecture/Webhook-Strategy.md",
    "docs/03-architecture/Queue-and-Jobs-Architecture.md",
    "docs/03-architecture/Caching-Strategy.md",
    "docs/03-architecture/Testing-Strategy.md",
    "docs/03-architecture/Deployment-Operations.md",
    "docs/03-architecture/Deployment-Checklist.md",
    "docs/03-architecture/Monitoring-Alerting-Plan.md",
    "docs/03-architecture/Backup-Recovery-Plan.md",
    "docs/03-architecture/Incident-Response-Playbook.md",
    "docs/03-architecture/Privacy-Policy.md",
    "docs/03-architecture/diagrams/README.md",
    "docs/03-architecture/diagrams/c4-l1-system-context.mmd",
    "docs/03-architecture/diagrams/c4-l2-containers.mmd",
    "docs/03-architecture/diagrams/c4-l3-components.mmd",
    "docs/03-architecture/diagrams/dfd-l0-context.mmd",
    "docs/03-architecture/diagrams/dfd-l1-platform.mmd",
    "docs/03-architecture/diagrams/dfd-l2-core-flow.mmd",
    "docs/03-architecture/diagrams/auth-flow.mmd",
    "docs/03-architecture/diagrams/main-user-flow.mmd",
    "docs/03-architecture/diagrams/payment-flow.mmd",
    "docs/03-architecture/diagrams/webhook-processing-flow.mmd",
    "docs/03-architecture/diagrams/deployment-topology.mmd",
    "docs/03-architecture/openapi/README.md",
    "docs/03-architecture/openapi/openapi.yaml",
    "docs/04-ux-and-flows/Information-Architecture.md",
    "docs/04-ux-and-flows/Low-Fidelity-Wireframes.md",
    "docs/04-ux-and-flows/Medium-Fidelity-Wireframes.md",
    "docs/04-ux-and-flows/High-Fidelity-Wireframes.md",
    "docs/04-ux-and-flows/UX-Flows.md",
    "docs/04-ux-and-flows/Use-Case-Diagrams.md",
    "docs/04-ux-and-flows/Admin-Flows.md",
    "docs/04-ux-and-flows/Empty-Loading-Error-States.md",
    "docs/05-project-plan/project_plan.md",
    "docs/05-project-plan/Milestones.md",
    "docs/05-project-plan/Delivery-Risks.md",
    "docs/05-project-plan/Backlog.md",
    "docs/05-project-plan/Release-Plan.md",
    "docs/06-engineering/README.md",
    "docs/06-engineering/Onboarding-Guide.md",
    "docs/06-engineering/Team-Workflow.md",
    "docs/06-engineering/Git-Branching-Strategy.md",
    "docs/06-engineering/Code-Review-Checklist.md",
    "docs/06-engineering/Definition-of-Done.md",
    "docs/06-engineering/Pull-Request-Template.md",
    "docs/06-engineering/Local-Development.md",
    "docs/06-engineering/Environment-Variables.md",
    "ai/README.md",
    "ai/AI-Agent-Rules.md",
    "ai/AI-Agent-Runbook.md",
    "ai/AI-Context-Index.md",
    "ai/AI-Team-Routing.md",
    "ai/AI-Implementation-Backlog.md",
    "ai/AI-Phase-Prompts.md",
    "ai/AI-Definition-of-Done.md",
]


ENTERPRISE_EXTRA_FILES = [
    "docs/01-product/Market-Context.md",
    "docs/01-product/Stakeholder-Map.md",
    "docs/02-requirements/Compliance-Requirements.md",
    "docs/02-requirements/Service-Level-Objectives.md",
    "docs/03-architecture/ADR/README.md",
    "docs/03-architecture/Compliance-Architecture.md",
    "docs/03-architecture/Data-Retention-Policy.md",
    "docs/03-architecture/Audit-Logging-Strategy.md",
    "docs/03-architecture/Vendor-Risk-Register.md",
    "docs/03-architecture/Support-Operations-Runbook.md",
    "docs/04-ux-and-flows/Accessibility-Review.md",
    "docs/05-project-plan/Release-Governance.md",
    "docs/06-engineering/Incident-Postmortem-Template.md",
]


def title_from_path(path: str) -> str:
    stem = Path(path).stem
    if stem.lower() == "readme":
        parent = Path(path).parent.name
        stem = f"{parent} README" if parent else "README"
    return stem.replace("-", " ").replace("_", " ")


def placeholder(path: str) -> str:
    suffix = Path(path).suffix.lower()
    title = title_from_path(path)
    if suffix == ".yaml":
        return (
            "openapi: 3.1.0\n"
            "info:\n"
            f"  title: {title}\n"
            "  version: 0.1.0\n"
            "paths: {}\n"
        )
    if suffix == ".mmd":
        return (
            "flowchart TB\n"
            f'    Placeholder["{title}"]\n'
        )
    if Path(path).name == ".env.example":
        return "# Add safe placeholder environment variable names here.\n"
    return (
        f"# {title}\n\n"
        "Status: Draft\n\n"
        "Purpose: Replace this placeholder with implementation-grade documentation.\n\n"
        "Open decisions:\n\n"
        "- TBD\n"
    )


def files_for_level(level: str) -> list[str]:
    if level == "lite":
        return ROOT_FILES + LITE_FILES
    if level == "full":
        return ROOT_FILES + FULL_FILES
    return ROOT_FILES + FULL_FILES + ENTERPRISE_EXTRA_FILES


def main() -> int:
    parser = argparse.ArgumentParser(description="Scaffold a project docs pack.")
    parser.add_argument("target_root", help="Directory where the docs pack should be created.")
    parser.add_argument("--level", choices=["lite", "full", "enterprise"], default="full")
    parser.add_argument("--force", action="store_true", help="Overwrite existing placeholder files.")
    parser.add_argument("--dry-run", action="store_true", help="Print files without writing.")
    args = parser.parse_args()

    root = Path(args.target_root).resolve()
    files = files_for_level(args.level)

    for relative in files:
        path = root / relative
        if args.dry_run:
            print(path)
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        if path.exists() and not args.force:
            continue
        path.write_text(placeholder(relative), encoding="utf-8")

    if not args.dry_run:
        print(f"Created {len(files)} docs-pack paths under {root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
