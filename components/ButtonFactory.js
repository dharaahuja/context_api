import { PrimaryButton, SecondaryButton, DangerButton } from "./PrimaryButton"

export const ButtonFactory = (type, props) => {
    switch (type) {
        case 'primary':
            return <PrimaryButton {...props} />
        case 'secondary':
            return <SecondaryButton {...props} />
        case 'danger':
            return <DangerButton {...props} />
        default:
            return null;
    }
} 