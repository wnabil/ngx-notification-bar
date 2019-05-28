export enum NotificationType { Info, Success, Error, Warning }

export interface Notification {
  message: string;
  type?: NotificationType;
  typeValue?: string;
  autoHide?: boolean;
  hideDelay?: number;
  isHtml?: boolean;
  allowClose?: boolean;
  hideOnHover?: boolean;
}
