
type TrackingEventData = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    fbq: (action: string, eventName: string, data?: TrackingEventData) => void;
  }
}



export const trackGTM = (eventName: string, eventData?: TrackingEventData) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};


export const trackFacebook = (eventName: string, eventData?: TrackingEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};


export const trackPageView = () => {
  trackGTM('PageView');
  trackFacebook('PageView');
};


export const trackLead = (data?: TrackingEventData) => {
  trackGTM('Lead', {
    content_name: 'Lead Form Started',
    ...data,
  });
  trackFacebook('Lead', data);
};


export const trackSubmitForm = (formData: TrackingEventData) => {
  trackGTM('SubmitForm', {
    content_name: 'Form Submitted',
    form_data: formData,
  });
  
  trackFacebook('Lead', {
    content_name: 'Form Submitted',
    ...formData,
  });
};

export const trackEvent = (eventName: string, eventData?: TrackingEventData, includeFacebook = true) => {
  trackGTM(eventName, eventData);
  
  if (includeFacebook && typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, eventData);
  }
};

