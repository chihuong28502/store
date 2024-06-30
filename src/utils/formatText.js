import slugify from 'slugify';

function formatText(str) {
    return slugify(str || '', {
        replacement: '-',
        remove: undefined,
        lower: true,
        strict: true,
        locale: 'vi',
        trim: true,
    });
}
export default formatText;
