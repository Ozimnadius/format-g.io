const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "30px",
    outputStyle: "scss",
    container: {
        maxWidth: "1170px",
        fields: "15px",
    },
    breakPoints: {
        lg: {
            width: "1199.99px",
            fields: "15px",
        },
        md: {
            width: "991.99px",
            fields: "15px",
            containerWidth: "750px"
        },
        sm: {
            width: "767.99px",
            fields: "15px",
            containerWidth: "570px"
        },
        xs: {
            width: "575.99px",
            fields: "15px",
            containerWidth: "100%"
        }
    },
});