import * as React from 'react'
import Popup from 'reactjs-popup';

type SearchHintPropsType = {
    isOpen: boolean
}

const SearchHint: React.FC<SearchHintPropsType>  = ({isOpen}) => {
    return (
        <div>
            <Popup
                className="searchHint__popup"
                closeOnDocumentClick
                open={isOpen}
            >
                <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda at aut consequuntur
                    deleniti dicta dolorem ea eum ex expedita facilis id in incidunt ipsa laboriosam libero molestiae
                    mollitia nemo quibusdam, quisquam quod quos reiciendis sed similique tenetur ullam veritatis. A
                    accusamus adipisci animi, asperiores beatae consequatur cumque doloremque ea ex, exercitationem
                    expedita fugiat fugit illo illum in incidunt ipsam iure iusto laborum mollitia natus necessitatibus
                    nesciunt nobis obcaecati odit officiis pariatur perferendis provident quisquam recusandae similique
                    suscipit temporibus tenetur totam ut vitae voluptatem! Aspernatur aut cupiditate deleniti fugit
                    inventore iste obcaecati odit optio quas reiciendis. Dicta nam repellat suscipit!</p>
                </div></Popup>
        </div>
    );
}

export default SearchHint;