export const groups: {[key: string]: string} = {
  personal: 'Personal',
  university: 'Universidad',
  work: 'Trabajo',
  other: 'Otros',
};

export const groupsArray = Object.keys(groups).map(key => ({
  label: groups[key],
  value: key,
}));
