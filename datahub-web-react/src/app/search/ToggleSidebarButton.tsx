import React, { memo, useState } from 'react';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { ReactComponent as ExpandIcon } from '../../images/expand.svg';
import { ReactComponent as CollapseIcon } from '../../images/collapse.svg';

const ToggleIcon = styled(Icon)`
    color: ${(props) => props.theme.styles['primary-color']};
    &&& {
        font-size: 16px;
    }
`;

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

const ToggleSidebarButton = ({ isOpen, onClick }: Props) => {
    const [pauseTooltip, setPauseTooltip] = useState(false);
    const title = isOpen ? 'Hide the navigation panel' : 'Open the navigation panel';
    const placement = isOpen ? 'bottom' : 'bottomRight';

    const onClickButton = () => {
        setPauseTooltip(true);
        window.setTimeout(() => setPauseTooltip(false), 250);
        onClick();
    };

    const button = (
        <Button
            data-testid="browse-v2-toggle"
            size="small"
            onClick={onClickButton}
            icon={<ToggleIcon component={isOpen ? CollapseIcon : ExpandIcon} />}
        />
    );

    if (pauseTooltip) return button;

    return (
        <Tooltip title={title} placement={placement} arrowPointAtCenter>
            {button}
        </Tooltip>
    );
};

export default memo(ToggleSidebarButton);
