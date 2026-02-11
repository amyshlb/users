import { CardInterface } from '../types';
import styles from './Card.module.css';
import Badge from './Badge';
import Button from './Button';

const Card = ({ badge, id, name, email, address, company, btn }: CardInterface) => {
    return (
        <article className={`stack-lg ${styles.card}`} >
            {badge && <Badge text={badge.text} filled={badge.filled} />}
            <div className="stack-sm">
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.id}>ID: {id}</p>
                <p className={styles.email}> Email: {email}</p>
                <p className={styles.address}> Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                <p className={styles.company}> Company: {company.name} - {company.catchPhrase} - {company.bs}</p>
            </div>
            <Button filled={btn.filled} text={btn.text} onclick={btn.onclick} type={btn.type} />
        </article>
    )
}

export default Card
