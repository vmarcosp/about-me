
class Events {
    /**@param {function} callback
     * @param {string} eventName
     * @param {array} $elements  
     */
    static addEventForClass(eventName, $elements, callback) {
        Array.from($elements).forEach($element => {
            console.log($element);
            $element.addEventListener(eventName, function (event) {
                callback(event);
            });
        });
    }
}

export default Events;