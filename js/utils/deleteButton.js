import { baseUrl } from "../components/baseUrl.js";
import { getToken } from "./saveUser.js";

export function deleteArticle(id) {
    const deleteButton = document.querySelector(".deleteButton");

    deleteButton.onclick = async () => {

        if (confirm("Are you sure you want to delete this article?")) {
            const deleteUrl = baseUrl + "articles/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            };

            try {
                const response = await fetch(deleteUrl, options);
                const json = await response.json();

                location.href = "/";

            } catch (error) {
                console.log(error);
                displayMessage("error", error, formMessageContainer);
            }
        }

    }
}