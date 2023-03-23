export const groups: {
  [key: string]: {
    name: string;
    icon: string;
  };
} = {
  personal: {name: 'Personal', icon: 'account'},
  university: {name: 'Universidad', icon: 'school'},
  work: {name: 'Trabajo', icon: 'briefcase'},
  other: {name: 'Otros', icon: 'briefcase'},
};

export const groupsArray = Object.keys(groups).map(key => ({
  value: key,
  label: groups[key].name,
  icon: groups[key].icon,
}));
