import { services } from '../data/services';
export function getLocalAssistantReply(raw) {
 const q = raw.toLowerCase();
 if (/hello|hi|hey|good morning|good afternoon/.test(q)) return 'Hello! I’m DialBack Guide, the built-in assistant. You can ask me to find a service, explain the menu, or show what is available offline.';
 if (/offline|no internet|without internet|connection/.test(q)) return 'DialBack can show its cached service guides and saved preferences offline. Live AI, fresh listings and external services need an internet connection. Look for the “Available offline” label in the directory.';
 if (/menu|ussd|navigate|start/.test(q)) return 'Open the USSD Experience and choose a numbered option. You can use Back to return to the previous menu, Home to restart, or type the option number and press Continue.';
 const match = services.find(s => [s.name, s.category, ...s.keywords].some(k => q.includes(k.toLowerCase())));
 if (match) return `I found a relevant option: ${match.name}. ${match.description} ${match.offline ? 'This guide is available offline after it has been cached.' : 'This section needs an internet connection for fresh information.'} Open the Service Directory to explore it.`;
 if (/voice|speak|microphone/.test(q)) return 'If your browser supports speech recognition, you can use the microphone button in the assistant. You can always type your question instead.';
 return 'I can help with service discovery, USSD navigation, digital skills, community information and offline access. Try asking “What can I use offline?” or “Help me find digital skills resources.”';
}
