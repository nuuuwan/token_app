import Button from '@mui/material/Button';

export default function PageLink({page, onClickOpenPage, label, children}) {
  const onClick = function() {
    onClickOpenPage(page);
  }
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
}
