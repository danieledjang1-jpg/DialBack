# DialBack requirements (starter)

## Goal
Provide a USSD-inspired interface for discovering informational guides, with local natural-language assistance and offline-aware access.

## Functional requirements
1. Users can navigate a numbered menu, choose options, return to prior menus and restart.
2. Users can search and filter a directory of clearly labelled demonstration guides.
3. Users can ask the local assistant supported questions and receive a transparent local response.
4. Users can view connection status and access app assets and bundled guide content after the app has been cached.
5. Users can manage local display preferences and view local activity history.

## Non-functional requirements
- Responsive desktop and mobile layouts.
- Keyboard-operable controls and visible focus.
- Respect reduced-motion preferences.
- No hard-coded secrets or misleading external-service claims.
- Production build must complete successfully.

## Out of scope for this demo
Telecom USSD gateway, financial transactions, verified emergency contacts, live provider verification, remote LLM, push notifications and remote user accounts.
