export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourClasses',
    ContactUs = 'contactUs',
}

export interface BenefitType {
    icon: JSX.Element;
    title: String;
    desc: String
}