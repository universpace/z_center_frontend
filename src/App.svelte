<script lang="ts">
    import SideBar from "./components/sideBar.svelte";
    import Router from "svelte-spa-router";
    import MainPage from "./pages/MainPage.svelte";
    import StudentList from "./pages/StudentList.svelte";
    import StudentReg from "./pages/StudentReg.svelte";
    import RecordList from "./pages/RecordList.svelte";
    import RecordReg from "./pages/RecordReg.svelte";
    import Login from "./pages/Login.svelte";
    import Assign from "./pages/Assign.svelte";
    import Settings from "./pages/Settings.svelte";

</script>

<style global lang="postcss">
    body {
        padding: 0;
        height: 100%;
    }

    html {
        padding: 0;
        height: 100%;
    }
</style>

<main class="flex h-full">
    <SideBar/>
    <section class="bg-[#F5F6F8] w-full h-full">
        <Router
                routes="{{
            '/':MainPage,
            '/student/list':StudentList,
            '/student/reg':StudentReg,
            '/record/list':RecordList,
            '/record/reg':RecordReg,
            '/login':Login,
            '/assign':Assign,
            '/settings':Settings
        }}"
                restoreScrollState>
        </Router>
    </section>
</main>