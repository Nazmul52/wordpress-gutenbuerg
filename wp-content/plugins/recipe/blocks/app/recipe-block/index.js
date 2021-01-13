import block_icons from '../icon/index';


const { registerBlockType }  = wp.blocks;
const {__}                   = wp.i18n;
const { InspectorControls }  = wp.editor;
const { PanelBody, PanelRow, TextControl, SelectControl,
} = wp.components;

wp.blocks.registerBlockType( 'udemy/recipe', {
    title:         __('Recipe', 'recipe'),
    description:   __(
        'Provides a short summary of a recipe.',
        'recipe'
    ),

    category:                         'common',
    icon:                             block_icons.wapuu,
    keywords: [ 
       __('Food', 'recipe'),
       __('Ingrdients', 'recipe'),
       __('Meal Type', 'recipe')
    ],
    supports: {
        html :              false
    },
    attributes: {
        ingredients:{
            type:           'string',
            source:         'text',
            selector:       '.ingredients-ph',
        },
        cooking_time:{
            type:           'string',
            source:         'text',
            selector:       '.cooking-time -ph',

        },
        utensils: {
            type:           'string',
            source:         'text',
            selector:       '.utensils -ph',
        },
        cooking_experince : {
            type:           'string',
            source:         'text',
            selector:       '.cooking-experince -ph',
        },
        meal_type: {
            type:           'string',
            source:         'text',
            selector:       '.meal-type -ph',
        }

    },
    edit: (props) => {
        return [
            <InspectorControls>
                <PanelBody title={ __('Basics', 'recipe')}>
                    <PanelRow>
        <p>{ __('Configure the contents of your block here.', 'recipe ')}</p>
                    </PanelRow>
                    <TextControl Label={ __('Ingredients', 'recipe') }
                    help={ __('Ex: tomatoes, kettuce, olive oil, etc.', 'recipe')}
                    value={ props.attributes.ingredients}
                    onChange={ (new_val) => {
                        props.setAttributes({ ingredients: new_val })
                    }} />

                    <TextControl Label={ __('Cooking Time', 'recipe') }
                                        help={ __('How long will this take to cook?', 'recipe')}
                                        value={ props.attributes.cooking_time}
                                        onChange={ (new_val) => {
                                            props.setAttributes({ cooking_time: new_val })
                                        }} />

                    <TextControl Label={ __('Utensils', 'recipe') }
                                        help={ __('Ex: spoon, kinif, pots, pans, etc.', 'recipe')}
                                        value={ props.attributes.utensils}
                                        onChange={ (new_val) => {
                                            props.setAttributes({ utensils: new_val })
                                        }} />
                    <SelectControl 
                        label={ __('Cooking Experince', 'recipe')}
                        help={__('How skilled should the reader be?', 'recipe')}
                        value={ props.attributes.cooking_experince}
                        options={[
                            {value: 'Beginner', label: 'Beginner'},
                            {value: 'Intermediate', label: 'Intermediate'},
                            {value: 'Expert', label: 'Expert'},

                        ]}
                        onChange={ (new_val) => {
                          props.attributes({ cooking_experince: new_val})
                        }}
                    />
                    <SelectControl 
                        label={ __('Meal Type', 'recipe')}
                        help={__('When is this best eaten?', 'recipe')}
                        value={ props.attributes.meal_type}
                        options={[
                            {value: 'Breakfast', label: 'Breakfast'},
                            {value: 'Lunch', label: 'Lunch'},
                            {value: 'Dinner', label: 'Dinner'},

                        ]}
                        onChange={ (new_val) => {
                            props.attributes({ meal_type: new_val})
                        }}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className={ props.className }>
                <ul class="list-unstyled">
                    <li>
                        <strong>{ __('Ingredients', 'recipe' ) } : </strong> <span className="ingredients-ph">{ props.attributes.ingredients }
                       
                         </span></li>
                    <li><strong>{ __('Cooking Time', 'recipe' )}: </strong> <span className="cooking-time-ph">{ props.attributes.cooking_time} </span></li>
                    <li><strong>{ __('Utensils', 'recipe')}: </strong> <span className="utensils-ph">{ props.attributes.utensils} </span></li>
                    <li><strong>{__('Cooking Experience', 'recipe')}: </strong> <span className="cooking-experince-ph">{ props.attributes.cooking_experince} </span></li>
                    <li><strong>{__('Meal Type', 'recipe')}: </strong> <span className="meal-type-ph">{ props.attributes.meal_type } </span></li>
                </ul>
            </div>
        ];
    },
    save: (props) => {
        return (
            <div>
            <ul class="list-unstyled">
                <li>
                    <strong>{ __('Ingredients', 'recipe' ) } : </strong> <span className="ingredients-ph">{ props.attributes.ingredients }
                   
                     </span></li>
                <li><strong>{ __('Cooking Time', 'recipe' )}: </strong> <span className="cooking-time-ph">{ props.attributes.cooking_time} </span></li>
                <li><strong>{ __('Utensils', 'recipe')}: </strong> <span className="utensils-ph">{ props.attributes.utensils} </span></li>
                <li><strong>{__('Cooking Experience', 'recipe')}: </strong> <span className="cooking-experince-ph">{ props.attributes.cooking_experince} </span></li>
                <li><strong>{__('Meal Type', 'recipe')}: </strong> <span className="meal-type-ph">{ props.attributes.meal_type } </span></li>
            </ul>
        </div>
        )
    }
});
