export function disableProperty(name: string) {
  return {
    [name]: {
      table: {
        disable: true,
      },
    },
  };
}
