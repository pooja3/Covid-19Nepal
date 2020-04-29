import CSSModules from 'react-css-modules'
const applyWrappers = (WrappedComponent, styles) => {
    return CSSModules(
        WrappedComponent,
        styles,
        {
            allowMultiple: true
        }
    );
}
export default applyWrappers;
