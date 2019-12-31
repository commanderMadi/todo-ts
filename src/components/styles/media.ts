export const media = {
  smallVp: (...data: any) => {
    const styles = data;
    return `@media (max-width: 576px) {
            ${styles}
        }`;
  },
  mediumVp: (...data: any) => {
    const styles = data;
    return `@media (max-width: 798px) {
          ${styles}
      }`;
  }
};
