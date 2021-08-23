import Stories from "./Stories";
import Posts from "./Posts";

export default function MainContent () {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}