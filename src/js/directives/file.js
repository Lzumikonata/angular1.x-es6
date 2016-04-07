/**
 * Created by Witt on 2016/4/7.
 */
const file = () => {
    return {
        resetrict: 'EA',
        link: (scope, element, attr, ctrl) => {
            const listener = event => {
               scope.file = event.target.files[0]
            }
            element.bind('change', listener)
        }
    }
}

export default file