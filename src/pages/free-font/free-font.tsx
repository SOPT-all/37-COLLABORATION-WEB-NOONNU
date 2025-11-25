import DropDown from '@/shared/components/drop-down/drop-down';

const FreeFont = () => {
  return (
    <div style={{ width: '20rem', display: 'flex', justifyContent: 'center' }}>
      <DropDown initialSort='인기순'>
        <DropDown.Trigger />
        <DropDown.Menu>
          <DropDown.Item>인기순</DropDown.Item>
          <DropDown.Item>조회순</DropDown.Item>
          <DropDown.Item>최신순</DropDown.Item>
          <DropDown.Item>이름순</DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
};

export default FreeFont;
