import './Recharge.scss';
import BoxRecharge from './HistoryRecharge';
import HistoryRecharge from './HistoryWithdrawal';
import { Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faList } from '@fortawesome/free-solid-svg-icons';

function Recharge() {
    const onChange = (key) => {
        // console.log(key);
    };
    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
                {
                    label: (
                        <p className="text-[#fff]">
                            <FontAwesomeIcon icon={faList} />
                            <span className="ml-2">Lịch sử nạp tiền</span>
                        </p>
                    ),
                    key: '1',
                    children: <BoxRecharge />,
                },
                {
                    label: (
                        <p className="text-[#fff]">
                            <FontAwesomeIcon icon={faCoins} />

                            <span className="ml-2">Lịch sử rút tiền</span>
                        </p>
                    ),
                    key: '2',
                    children: <HistoryRecharge />,
                },
            ]}
        />
    );
}

export default Recharge;
