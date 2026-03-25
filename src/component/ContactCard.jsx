// trying to turn this into some kind of card that can be used for each contact.  I will need to use props to do this.
const ContactCard = ({name, job, email}) => {
    return ( 
        <>
            <li className="contact_card">
                {/* this is the prop section being called.  */}
                <h2>{name}</h2>
                <dl>
                    <dt>Job</dt>
                    <dd>{job}</dd>
                    <dt>Email</dt>
                    <dd>{email}</dd>
                </dl>
            </li>
        </>
     );
}
 
export default ContactCard;