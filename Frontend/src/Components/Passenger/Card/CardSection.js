import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { CARD_STYLES as styles } from './styles';

export default class CardSection extends React.Component  {

	constructor(props) {
		super(props);
	}

	render() {
		initializeIcons();
		return (
			<div style={styles.container}>
				<div className="container">
					<Card styles={styles.card}>
						<Card.Section>
							<Card.Item>
								<i style={styles.icon} className={`ms-Icon ms-Icon--${'Money'}`} aria-hidden="true" />
								<Text styles={styles.header}>{'Current Balance'}</Text>
							</Card.Item>
							<Card.Item>
								<Text styles={styles.amount}>Rs. {this.props.balance}.00</Text>
							</Card.Item>
						</Card.Section>
					</Card>
				</div>
			</div>
		);
	}
}
