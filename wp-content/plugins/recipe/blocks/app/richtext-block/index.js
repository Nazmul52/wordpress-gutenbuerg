import block_icons from '../icon/index';

const { registerBlockType }         =   wp.blocks;
const { RichText }                  =   wp.editor;
const { __ }                        =   wp.i18n;

registerBlockType( 'udemy/rich-text', {
    title:                              __( 'Rich Text Example', 'recipe' ),
    description:                        __( 'Rich text example', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {
        nessage: {
            type:                       'array',
            source:                     'children',
            selector:                   '.message'
        }
    },
    edit: ( props ) => {
        return (
            <div className={ props.className }>
                <h3>Rich Text Example Block</h3>
                <RichText 
                    tagName="div"
                    multiline="p"
                    placeholder={ __('Add your contest here.', 'recipe')}
                    onChange={ (new_val) => {
                        props.attributes({ mesaage: new_val});
                    }}
                    value={ props.attributes.mesaage}
                />
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <h3>Rich Text Example</h3>
                <div className="message-ctr">
                    {props.attributes.mesaage}
                </div>
            </div>
        )
    }
});