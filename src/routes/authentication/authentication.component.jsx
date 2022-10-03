import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-in-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <SignInForm />

            <SignUpForm />
        </div>
    );
};

export default Authentication;