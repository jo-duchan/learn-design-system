type Callback = () => void;

const debounce = (callback: Callback, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};

export default debounce;
