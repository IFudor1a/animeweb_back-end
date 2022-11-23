const path = require("path");


class ProductService {

    formerProduct = (name, description, consists, price, photos) => {
        return {
            product_name: name,
            product_images: photos,
            unit_price: price,
            product_description: description,
            product_consists: consists
        }
    }
    fileUpload = async (files) => {
        let PhotoArray = ''
        const root = path.join(__dirname, '../')
        for (const file of Object.values(files)) {
            const photoName = 'uploads/' + encodeURI(Date.now() + '-' + file.name)
            PhotoArray = PhotoArray + photoName + ' '
            await file.mv(`${root}public/${photoName}`, err => {
                if (err) {
                    console.error(err)
                }
            })
        }
        return PhotoArray;
}
}

module.exports = new ProductService()