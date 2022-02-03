export default function Helpers() {
    let errorClassName      = 'border-danger';
    const getErrorClassName = (errors) => {
        return errors.length ? errorClassName : '';
    };

    return {
        getErrorClassName,
    }
};
