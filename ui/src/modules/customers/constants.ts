export const connectors = {
  any: 'any',
  all: 'all'
};

export const operators = [
  { name: 'equals', value: 'e' },
  { name: 'does not equal', value: 'dne' },
  { name: 'contains', value: 'c' },
  { name: 'does not contain', value: 'dnc' },
  { name: 'is set', value: 'is', noInput: true },
  { name: 'is not set', value: 'ins', noInput: true },
  { name: 'is greater than', value: 'igt' },
  { name: 'is less than', value: 'ilt' },
  { name: 'is true', value: 'it', noInput: true },
  { name: 'is false', value: 'if', noInput: true }
];

export const CUSTOMER_BASIC_INFO = {
  avatar: 'Avatar',
  firstName: 'First Name',
  lastName: 'Last Name',
  primaryEmail: 'Primary E-mail',
  primaryPhone: 'Primary Phone',
  position: 'Position',
  department: 'Department',
  leadStatus: 'Pop Ups Status',
  lifecycleState: 'Lifecycle state',
  hasAuthority: 'Has Authority',
  description: 'Description',
  doNotDisturb: 'Do not disturb',

  ALL: [
    { field: 'avatar', label: 'Avatar' },
    { field: 'firstName', label: 'First Name' },
    { field: 'lastName', label: 'Last Name' },
    { field: 'primaryEmail', label: 'Primary E-mail' },
    { field: 'primaryPhone', label: 'Primary Phone' },
    { field: 'position', label: 'Position' },
    { field: 'department', label: 'Department' },
    { field: 'leadStatus', label: 'Pop Ups Status' },
    { field: 'lifecycleState', label: 'Lifecycle state' },
    { field: 'hasAuthority', label: 'Has Authority' },
    { field: 'description', label: 'Description' },
    { field: 'doNotDisturb', label: 'Do not disturb' }
  ]
};

export const CUSTOMER_DATAS = {
  visitorContactInfo: 'Visitor contact info',
  owner: 'Owner',
  links: 'Links',

  ALL: [
    { field: 'visitorContactInfo', label: 'Visitor contact info' },
    { field: 'owner', label: 'Owner' },
    { field: 'links', label: 'Links' }
  ]
};

export const LEAD_STATUS_TYPES = {
  new: 'New',
  inProgress: 'In Progress',
  attemptedToContact: 'Attempted to contact',
  badTiming: 'Bad Timing',
  unqualified: 'Unqualified'
};

export const GENDER_TYPES = {
  0: 'Not known',
  1: 'Male',
  2: 'Female',
  9: 'Not applicable'
};

export const LIFECYCLE_STATE_TYPES = {
  subscriber: 'Subscriber',
  lead: 'Pop Ups',
  marketingQualifiedLead: 'Marketing Qualified Lead',
  salesQualifiedLead: 'Sales Qualified Lead',
  opportunity: 'Opportunity',
  customer: 'Customer',
  evangelist: 'Evangelist',
  other: 'Other'
};

export const CUSTOMER_LINKS = {
  linkedIn: 'LinkedIn',
  twitter: 'Twitter',
  facebook: 'Facebook',
  youtube: 'Youtube',
  github: 'Github',
  website: 'Website',

  ALL: [
    { field: 'linkedIn', label: 'LinkedIn' },
    { field: 'twitter', label: 'Twitter' },
    { field: 'facebook', label: 'Facebook' },
    { field: 'youtube', label: 'Youtube' },
    { field: 'github', label: 'Github' },
    { field: 'website', label: 'Website' }
  ]
};
